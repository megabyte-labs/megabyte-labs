import { P as Prismic } from './prismic-javascript.min-4227ad8e.js';

const apiEndpoint = 'https://ionicframeworkcom.prismic.io/api/v2';
// Client method to query documents from the Prismic repo
const Client = (req = null) => Prismic.client(apiEndpoint, createClientOptions(req, null));
const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
  return Object.assign(Object.assign({}, reqOption), accessTokenOption);
};

export { Client as C };

//# sourceMappingURL=prismic-configuration-c3ee5216.js.map