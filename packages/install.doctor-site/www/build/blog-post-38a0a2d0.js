import { h, r as registerInstance, k as Host, l as getElement } from './index-9fe124a3.js';
import { R as ResponsiveContainer, B as Breakpoint, H as Heading, P as Paragraph, D as DateTime } from './index-257c74e4.js';

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate(), dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    result.setFullYear(dirtyDate.getUTCFullYear());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

var __rest = (undefined && undefined.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const ResponsiveImage = (_a) => {
  var { path, name, type = 'png', alt, dimensions, fallback = true } = _a, props = __rest(_a, ["path", "name", "type", "alt", "dimensions", "fallback"]);
  !props.loading ? (props.loading = 'lazy') : '';
  return (h("picture", null,
    h("source", { type: "image/webp", src: `${path}${name}@2x.webp 2x` }),
    h("source", { type: "image/webp", src: `${path}${name}.webp 1x` }),
    h("source", { type: "image/png", src: `${path}${name}@2x.${type} 2x` }),
    h("source", { type: "image/png", src: `${path}${name}.${type} 1x` }),
    h("img", Object.assign({}, props, { alt: alt, src: `${path}${name}.${type}`, width: dimensions.split('x')[0], height: dimensions.split('x')[1] }))));
};

const blogPostCss = ".sc-blog-post{--h1-color:var(--c-carbon-100);--p2-color:var(--c-indigo-100);--p3-color:var(--c-indigo-100);display:block;overflow:hidden}.sc-blog-post .modified-date{font-weight:bold}.sc-blog-post .tag-pill{display:inline-block;padding:4px;background:var(--c-gray-10);color:var(--c-gray-40);font-size:10px;border-radius:24px;padding-left:8px;padding-right:8px;margin-left:2px;margin-right:2px}.sc-blog-post #footer-social-container{width:100%;background-color:#f7f9fc;margin-top:-2px;border-top:2px solid var(--c-indigo-20)}.sc-blog-post .blog-footer-social{margin:0 auto;display:table}.sc-blog-post .blog-footer-social h4{margin-right:14px;display:inline-block;display:inline-block;text-transform:uppercase;font-size:14px;letter-spacing:4px;color:var(--c-carbon-30);margin-top:0;margin-bottom:37px;margin-top:37px}.sc-blog-post .blog-footer-social h4 span{border-bottom:2px solid var(--c-cyan-100)}@media (max-width: 500px){.sc-blog-post .blog-footer-social h4{letter-spacing:1px}}.sc-blog-post .blog-footer-social .footer-social{font-size:14px;display:inline-block;transition:opacity 0.3s ease-out;position:relative;top:6px;margin-left:8px;margin-right:8px;cursor:pointer}@media (max-width: 500px){.sc-blog-post .blog-footer-social .footer-social{font-size:30px;top:8px}.sc-blog-post .blog-footer-social .footer-social svg{height:30px;width:30px}}.sc-blog-post .blog-footer-social .footer-social.facebook{color:#3b5998}.sc-blog-post .blog-footer-social .footer-social.twitter{color:#00acee}.sc-blog-post .blog-footer-social .footer-social.linkedin{color:#0072b1}.sc-blog-post .blog-footer-social .footer-social:hover{opacity:0.8}.sc-blog-post .blog-footer-social .footer-social:active{opacity:0.9}.sc-blog-post .post{position:relative;max-width:736px;margin-inline-start:auto;margin-inline-end:auto;margin-block-start:var(--space-9);padding-block-end:var(--space-11)}.sc-blog-post .post h1{font-weight:bold !important}.sc-blog-post .post img{max-width:100%;margin:auto;padding:32px}.sc-blog-post .post .ui-heading-1{margin-block-end:var(--space-5)}.sc-blog-post .post .ui-heading-1 a{color:inherit}.sc-blog-post .post .author-date{display:flex;align-items:center;margin-block-end:var(--space-6)}.sc-blog-post .post .author-date img{margin-inline-end:var(--space-3);width:69px;height:69px;border-radius:69px;padding:0}.sc-blog-post .post .author-date .ui-paragraph{color:#92a1b3;margin:0}.sc-blog-post .post .featured-image-wrapper,.sc-blog-post .post .default-image-wrapper{margin-inline-start:-32px;margin-inline-end:-32px;margin-block-end:var(--space-8);overflow:hidden}.sc-blog-post .post .featured-image-wrapper img,.sc-blog-post .post .featured-image-wrapper picture,.sc-blog-post .post .default-image-wrapper img,.sc-blog-post .post .default-image-wrapper picture{width:100%;max-height:440px;object-fit:cover;transition:transform 0.2s cubic-bezier(0.32, 0.72, 0, 1)}.sc-blog-post .post .post-content h1{font-weight:bold}.sc-blog-post .post .post-content pre[class*=language-]{padding:2em;margin:1.6em 0px;overflow:auto;border-radius:8px}.sc-blog-post .post .post-content code{font-family:\"Roboto Mono\", \"Source Code Pro\", monospace;font-size:16px}.sc-blog-post .post .post-content .ui-paragraph{font-size:1.125rem}.sc-blog-post .post .post-content .paragraph-intro{font-family:var(--p2-font, var(--f-family-text));font-size:var(--p2-size, var(--f-size-6));line-height:var(--p2-leading, var(--f-leading-body));letter-spacing:var(--p2-tracking, var(--f-tracking-tight));font-weight:var(--p2-weight, var(--f-weight-regular));color:var(--p2-color, var(--c-indigo-90));text-transform:var(--p2-transform, none)}.sc-blog-post .post .post-content blockquote{background:rgba(255, 250, 237, 0.8);border-left:4px solid rgb(255, 204, 95);border-radius:2px 4px 4px 2px;color:rgb(115, 101, 69);font-size:14px;line-height:1.8;margin:1em 0px;padding:2em}.sc-blog-post .post .post-content p{margin:0}.sc-blog-post .post .post-content p code{font-family:\"Roboto Mono\", \"Source Code Pro\", monospace;font-size:1rem;background-color:#f4f7fa;border-radius:4px;padding:4px 6px}.sc-blog-post .post .post-content ul{margin-block-start:var(--space-6);margin-block-end:var(--space-6)}.sc-blog-post .post .post-content li{list-style:disc;margin-block-end:1rem}.sc-blog-post .post .post-content li:last-of-type{margin-block-end:0}.sc-blog-post .post .post-content p+p{margin-block-start:var(--space-6)}.sc-blog-post .post .post-content p+h2{margin-block-start:var(--space-9)}.sc-blog-post .post .post-content blog-forum-link{margin-block-start:3rem;margin-block-end:3rem}.sc-blog-post .post .continue-reading{color:var(--c-capacitor-blue);margin-block-start:30px;transition:opacity 0.3s ease-out}.sc-blog-post .post .continue-reading:hover{opacity:0.7}.sc-blog-post.detail .sticky-wrapper{position:absolute;height:100%;left:-96px;top:5px}.sc-blog-post.detail .sticky-wrapper blog-social-actions.top{position:sticky;top:calc(var(--blog-subnav-height) + var(--space-6))}.sc-blog-post.detail .post-content{border-bottom:2px solid var(--c-indigo-20);padding-block-end:69px}.sc-blog-post.detail more-resources{margin-block-end:121px}.sc-blog-post.detail .more-resources__title{margin-block-end:var(--space-5)}.sc-blog-post.detail disqus-comments{margin-block-end:69px}.sc-blog-post.detail blog-social-actions.bottom{padding-inline-start:31px;padding-inline-end:31px;background:white;position:absolute;left:50%;transform:translate(-50%, -50%)}.sc-blog-post.detail .author-info{display:flex;margin-block-start:var(--space-6);margin-block-end:var(--space-6)}.sc-blog-post.detail .author-info img{width:128px;min-width:128px;height:128px;min-height:128px;margin-inline-end:var(--space-4);border-radius:128px;padding:0}.sc-blog-post.detail .author-info .description{display:flex;flex-direction:column;justify-content:center}.sc-blog-post.detail .author-info .description .ui-heading{color:#010610}.sc-blog-post.detail .author-info .description .ui-paragraph{margin-block-start:4px;color:#92a1b3}.sc-blog-post.preview .post{border-bottom:2px solid var(--c-indigo-20)}.sc-blog-post.preview .post .post-content>*{display:none}.sc-blog-post.preview .post .post-content>:first-child{display:block}.sc-blog-post.preview .post .post-content>:nth-child(2):not(h1):not(h2):not(h3):not(h4):not(h5):not(h6){display:block}.sc-blog-post.preview .featured-image-wrapper,.sc-blog-post.preview .default-image-wrapper{max-height:368px;text-align:center;margin-inline-start:0px;margin-inline-end:0px}.sc-blog-post.preview .featured-image-wrapper img,.sc-blog-post.preview .default-image-wrapper img{max-height:368px}.sc-blog-post.preview .featured-image-wrapper a:hover img,.sc-blog-post.preview .featured-image-wrapper a:focus img,.sc-blog-post.preview .featured-image-wrapper a:active img,.sc-blog-post.preview .default-image-wrapper a:hover img,.sc-blog-post.preview .default-image-wrapper a:focus img,.sc-blog-post.preview .default-image-wrapper a:active img{transform:scale(1.05, 1.05)}blog-post.sc-blog-post.detail .post{padding-bottom:0}";

const twitterLogo = ({ main = '#1DA1F2' } = {}, props) => (h("svg", Object.assign({ viewBox: "0.630000114440918 -0.003784056520089507 14.744999885559082 12.00379753112793" }, props), h("path", { fill: main, d: "M15.375 1.422a6.116 6.116 0 01-1.738.478A3.036 3.036 0 0014.97.225c-.585.347-1.232.6-1.922.734A3.026 3.026 0 007.89 3.72 8.574 8.574 0 011.653.553a3.029 3.029 0 00.94 4.044c-.5-.013-.968-.15-1.374-.378v.037a3.028 3.028 0 002.428 2.969 3.045 3.045 0 01-.797.106c-.194 0-.384-.019-.569-.056A3.03 3.03 0 005.11 9.378a6.066 6.066 0 01-4.48 1.253A8.457 8.457 0 005.258 12c5.572 0 8.616-4.616 8.616-8.619 0-.131-.003-.262-.01-.39a6.158 6.158 0 001.51-1.57z" })));
const facebookRoundedLogo = ({ main = 'gray' } = {}, props) => (h("svg", Object.assign({ viewBox: "0 0 20 20" }, props), h("path", { fill: main, "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M20 10.06C20 4.5 15.52 0 10 0S0 4.5 0 10.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H5.9v-2.91h2.54V7.84c0-2.52 1.5-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2V6.6H13.2c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.45 2.9h-2.33V20A10.04 10.04 0 0020 10.06z" })));
const linkedInLogo = ({ main = '#0072b1' } = {}, props) => (h("svg", Object.assign({ viewBox: "0 0 12 12" }, props), h("path", { fill: main, d: "M11.04 0H1.03C.48 0 0 .4 0 .93v10.04C0 11.52.48 12 1.03 12h10c.56 0 .97-.49.97-1.03V.93c0-.54-.41-.93-.96-.93zM3.72 10H2V4.66h1.72V10zm-.8-6.16h-.01c-.55 0-.9-.4-.9-.92S2.36 2 2.92 2s.9.4.92.92c0 .52-.36.92-.93.92zM10 10H8.28V7.08c0-.7-.25-1.18-.87-1.18-.47 0-.76.32-.88.64-.05.1-.06.26-.06.42V10H4.75V4.66h1.72v.74c.25-.35.64-.87 1.55-.87 1.13 0 1.98.75 1.98 2.35V10z" })));
const BlogPost = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.popupHeight = 0;
    this.popupWidth = 0;
    this.twitterUrl = [
      'http://twitter.com/intent/tweet?',
      `url=${encodeURIComponent(`${window.location.origin}${window.location.pathname}`)}`,
    ];
    this.facebookUrl = [
      'https://www.facebook.com/sharer/sharer.php?',
      `u=${encodeURIComponent(`${window.location.origin}${window.location.pathname}`)}`,
    ];
    this.linkedInUrl = [
      'https://www.linkedin.com/sharing/share-offsite',
      `?url=${encodeURIComponent(`${window.location.origin}${window.location.pathname}`)}`,
    ];
    this.getShareKeyword = () => {
      const keywords = ['Obey', 'Laugh', 'Prosper', 'Smile', 'Snicker', 'Twiddle', 'Praise', 'Dream', 'Thrive', 'Advance', 'Flourish', 'Multiply', 'Blossom'];
      return keywords[Math.floor(Math.random() * keywords.length)];
    };
    this.PostHelmet = () => {
      const path = this.data.featuredImage
        ? `${window.location.origin}/assets/img/blog${this.data.featuredImage}`
        : this.defaults.image;
      return (h("meta-tags", { defaults: this.defaults, "page-title": this.data.title, description: this.data.description, image: path }));
    };
    this.PostDetail = () => {
      const { PostAuthor, PostAuthorLarge, PostFeaturedImage, MoreResources, PostHelmet, PostTags, data, } = this;
      return [
        h(PostHelmet, null),
        h("site-header", { defaults: this.defaults, class: "heading-container", sticky: true }),
        h("blog-subnav", { breadcrumbs: [
            ['Blog', '/blog'],
            [data === null || data === void 0 ? void 0 : data.title, `/blog/${data.slug}`],
          ] }),
        h(ResponsiveContainer, null, h("article", { class: "post" }, h(Breakpoint, { md: true, class: "sticky-wrapper" }, h("blog-social-actions", { defaults: this.defaults, post: data, column: true, class: "top" })), h(Heading, { class: "ui-theme--editorial", level: 1 }, data.title), h(PostAuthor, { post: data }), h(PostTags, { post: data }), h(PostFeaturedImage, { preview: this.preview, post: data }), h("div", { class: "post-content", innerHTML: data.html }), h(PostAuthorLarge, { post: data }), h(MoreResources, null), h("disqus-comments", { url: `${window.location.origin}/blog/${data.slug}`, siteId: this.defaults.disqusSiteId }))),
        h(ResponsiveContainer, { id: "footer-social-container" }, h("div", { class: "blog-footer-social" }, h("h4", null, h("span", null, this.getShareKeyword()), " & Share:"), h("a", { class: "footer-social facebook", href: this.facebookUrl.join(''), onClick: (e) => this.shareFacebook(e), target: "_blank", rel: "noopener" }, facebookRoundedLogo({ main: '#3b5998' }, { width: 24, height: 24, class: 'facebook' })), h("a", { class: "footer-social twitter", href: this.twitterUrl.join(''), onClick: (e) => this.shareTwitter(e), target: "_blank", rel: "noopener" }, twitterLogo({ main: '#00acee' }, { width: 24, height: 24, class: 'twitter' })), h("a", { class: "footer-social linkedin", href: this.linkedInUrl.join(''), onClick: (e) => this.shareLinkedIn(e), target: "_blank", rel: "noopener" }, linkedInLogo({ main: '#0072b1' }, { width: 24, height: 24, class: 'linkedin' })))),
        h("capacitor-site-footer", { defaults: this.defaults })
      ];
    };
    this.PostPreview = () => {
      const { PostAuthor, PostFeaturedImage } = this;
      return (h("article", { class: "post" }, h(Heading, { class: "ui-theme--editorial", level: 2, onClick: () => {
          window.scrollTo(0, 0);
        } }, h("a", { class: "post-link post-title", "data-tags": this.data.tags ? this.data.tags : '', href: `/blog/${this.data.slug}` }, this.data.title)), h(PostAuthor, null), h(PostFeaturedImage, { preview: this.preview, post: this.data }), h("div", { class: "post-content", innerHTML: this.data.html }), h("a", { class: "continue-reading ui-paragraph-2", href: `/blog/${this.data.slug}` }, h("span", { onClick: () => window.scrollTo(0, 0) }, "Continue reading ", h("span", { class: "arrow" }, "->")))));
    };
    this.PostTags = () => {
      const { tags } = this.data;
      if (!tags.length)
        return;
      const tagArray = tags.split(',');
      return (h("div", { class: "tag-pills", "data-tags": tags }, tagArray.map(tag => (h("div", { class: "tag-pill" }, tag)))));
    };
    this.PostAuthor = () => {
      const { date, authorName, authorUrl, authorImageName, modifiedDate } = this.data;
      const dateString = parseISO(date);
      let modifiedDateString;
      if (modifiedDate) {
        modifiedDateString = parseISO(modifiedDate);
      }
      const imageParts = authorImageName === null || authorImageName === void 0 ? void 0 : authorImageName.split('.');
      if (!imageParts || !imageParts[0] || !imageParts[1])
        return console.error('Markdown Blog author image name not formatted correctly.  It should look like: max-lynch.png');
      const data = {
        name: imageParts[0],
        type: imageParts[1],
      };
      return (h("div", { class: "author-date" }, authorImageName ? (h(ResponsiveImage, Object.assign({}, data, { path: "/assets/img/blog/author/", dimensions: "69x69", alt: authorName }))) : null, h(Paragraph, { class: "publish-date" }, "By", ' ', authorUrl ? (h("a", { href: authorUrl, target: "_blank", rel: "noopener" }, authorName)) : (authorName), ' ', "on ", h(DateTime, { date: dateString })), modifiedDate ? (h(Paragraph, { class: "modified-date" }, h("span", null, "\u00A0(modified on", ' ', h(DateTime, { date: modifiedDateString }), ")"))) : ''));
    };
    this.PostAuthorLarge = () => {
      const { authorImageName, authorName, authorUrl, authorDescription, } = this.data;
      if (!authorImageName)
        return null;
      return (h("a", { href: authorUrl, target: "_blank", rel: "noopener", class: "author-info" }, h("webp-image", { src: `/assets/img/blog/author/${authorImageName}`, alt: authorName, width: "128", height: "128" }), h("div", { class: "description" }, h(Heading, { level: 5 }, authorName), authorDescription ? (h(Paragraph, { level: 4 }, authorDescription)) : null)));
    };
    this.MoreResources = () => {
      if (!this.moreResources.resources ||
        this.moreResources.resources.length <= 0)
        return;
      return [
        h(Heading, { level: 4, class: "more-resources__title | ui-theme--editorial" }, "You might also like..."),
        h("more-resources", Object.assign({}, this.moreResources)),
      ];
    };
    this.PostFeaturedImage = ({ post, preview, }) => {
      var _a;
      if (!post.featuredImage)
        return null;
      const imageParts = (_a = post.featuredImage) === null || _a === void 0 ? void 0 : _a.split('.');
      if (!imageParts || !imageParts[0] || !imageParts[1]) {
        console.log(post);
        return console.error('Markdown Blog featured image name not formatted correctly.  It should look like: what-is-mobile-ci-cd.png');
      }
      const data = {
        name: imageParts[0],
        type: imageParts[1],
        alt: post.featuredImageAlt,
      };
      const dimensions = imageParts[0].substring(imageParts[0].lastIndexOf('-') + 1);
      return (h("div", { class: "featured-image-wrapper" }, preview ? (h("a", { href: `/blog/${post.slug}` }, h(ResponsiveImage, Object.assign({}, data, { fallback: true, onClick: () => {
          window.scrollTo(0, 0);
        }, class: "featured-image", dimensions: dimensions, path: '/assets/img/blog', loading: "eager" })))) : (h(ResponsiveImage, Object.assign({}, data, { fallback: true, class: "featured-image", dimensions: dimensions, path: '/assets/img/blog', loading: "eager" })))));
    };
    this.preview = false;
    this.data = undefined;
    this.defaults = undefined;
    this.ogAssetPath = undefined;
    this.moreResources = {
      resources: [],
      routing: [],
    };
  }
  componentWillLoad() {
    // const { slug, getRelatedResources, preview } = this;
    // this.data = (posts as RenderedBlog[]).find(p => p.slug === slug);
    // if (!this.data) console.error('Could not find blog post by slug.');
    // if (!preview) getRelatedResources();
  }
  scrubUrl(url) {
    return url.replace(/http:\/\/localhost:\d\d\d\d/g, this.defaults.homepage);
  }
  openPopup(url) {
    this.calculatePopupSize();
    let leftPosition;
    let topPosition;
    leftPosition = window.screen.width / 2 - (this.popupWidth / 2 + 10);
    topPosition = window.screen.height / 2 - (this.popupHeight / 2 + 50);
    window.open(url, "Window2", "status=no,height=" +
      this.popupHeight +
      ",width=" +
      this.popupWidth +
      ",resizable=yes,left=" +
      leftPosition +
      ",top=" +
      topPosition +
      ",screenX=" +
      leftPosition +
      ",screenY=" +
      topPosition +
      ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
  }
  calculatePopupSize() {
    if (window.screen.width > 630) {
      this.popupHeight = 500;
      this.popupWidth = 600;
    }
    else {
      this.popupHeight = 300;
      this.popupWidth = 450;
    }
  }
  shareFacebook(e) {
    e.preventDefault();
    this.openPopup("https://www.facebook.com/dialog/share?app_id=" +
      this.defaults.facebookAppId +
      "&display=popup&href=" +
      encodeURIComponent(this.scrubUrl(`${window.location.origin}${window.location.pathname}`)));
  }
  shareTwitter(e) {
    e.preventDefault();
    this.openPopup("https://twitter.com/intent/tweet?url=" +
      encodeURIComponent(this.scrubUrl(`${window.location.origin}${window.location.pathname}`)) +
      "&text=" +
      encodeURIComponent(this.defaults.share.twitter.defaultTweet) +
      "&via=" + this.defaults.share.twitter.username + "&hashtags=" + this.defaults.share.twitter.hashtags + (this.data.tags.length ? ',' + this.data.tags : ''));
  }
  shareLinkedIn(e) {
    e.preventDefault();
    this.openPopup('https://www.linkedin.com/shareArticle?mini=true&url=' +
      encodeURIComponent(`${window.location.origin}${window.location.pathname}`) +
      '&title=' +
      encodeURIComponent(this.data.title) +
      '&summary=' +
      encodeURIComponent(this.defaults.share.linkedin.summary) +
      '&source=' +
      encodeURIComponent(this.defaults.share.linkedin.source));
  }
  // getRelatedResources = async () => {
  //   const { related } = this.data!;
  //   if (!related) return;
  //   await Promise.all(
  //     related.map(async resource => {
  //       const info = await this.getRelatedDetails(resource);
  //       if (!info || !info.type || !info.uid)
  //         return console.error('Couldnt get type or uid of related resources');
  //       const doc = await this.client.getByUID(
  //         resourceTypeToPrismicType(info.type),
  //         info.uid,
  //         {},
  //       );
  //       this.moreResources.resources?.push(prismicDocToResource(doc));
  //       (this.moreResources.routing as DS.ResourceCard['routing'][]).push(
  //         info.routing,
  //       );
  //     }),
  //   );
  //   this.moreResources = {
  //     resources: [...this.moreResources.resources!],
  //     routing: [
  //       ...(this.moreResources.routing! as DS.ResourceCard['routing'][]),
  //     ],
  //   };
  //   // this.moreResources = {...this.moreResources)};
  // };
  // getRelatedDetails = async (url: string) => {
  //   const matchResults = url.match(/\/resources\/(.*?)$/);
  //   if (!matchResults || !matchResults[1])
  //     return console.error('Invalid url for markdown blog related resources');
  //   const relatedInfo = matchResults[1].split('/');
  //   const uid = relatedInfo.pop();
  //   const type = relatedInfo.pop();
  //   if (!uid)
  //     return console.error(
  //       'Error getting uid from markdown blog related resource url',
  //     );
  //   if (!type) {
  //     const type = await this.getResourceType(uid);
  //     const routing = {
  //       base: '/resources',
  //       includeType: false,
  //       router: Router,
  //     };
  //     return { type, uid, routing };
  //   } else {
  //     return { type: getResourceTypeForParam(type), uid, routing: url };
  //   }
  // };
  // async getResourceType(uid: string) {
  //   const { data } = await this.client.getSingle('appflow_resources', {});
  //   const { type } = Object.values(data).find(
  //     (link: any) => link.hasOwnProperty('uid') && link.uid === uid,
  //   ) as ResourceLink;
  //   if (!type)
  //     console.error(
  //       'Markdown Blog related resource link not found in appflow resource center',
  //     );
  //   return typeToResourceType(type);
  // }
  render() {
    if (!this.data)
      return;
    const { PostDetail, PostPreview, preview } = this;
    return (h(Host, { class: {
        'sc-blog-post': true,
        'preview': preview,
        'detail': !preview,
      } }, preview ? h(PostPreview, null) : h(PostDetail, null)));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
};
BlogPost.style = blogPostCss;

export { BlogPost as B };

//# sourceMappingURL=blog-post-38a0a2d0.js.map