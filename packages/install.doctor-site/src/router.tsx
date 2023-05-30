import { Fragment, h } from '@stencil/core'
import {
  Route,
  createRouter,
  staticState,
  match
} from '@stencil/router'
import { getBlogData, getAllBlogData } from './util/blog'
import { CommunityPageData, defaults, EnterprisePageData, LandingPageData } from './store'

declare let window

export const Router = createRouter()

// Expose Router on window so that we can use in the `stencil-docusaurus-lib` package
window.Router = Router

export default Router

export const Routes = () => (
  <Router.Switch>
    <Route
      path="/"
      render={() => (
        <Fragment>
          <landing-page data={LandingPageData} />
        </Fragment>
      )}
    />

    <Route
      path="/blog"
      mapParams={staticState(getAllBlogData)}
      render={(_, data) => (
        <Fragment>
          <blog-page defaults={defaults} data={data instanceof Map ? Object.values(Object.fromEntries(data))[0] : data} />
        </Fragment>
      )}
    />

    <Route
      path={match('/blog/:slug*')}
      mapParams={staticState(getBlogData)}
      render={(_, data) => (
        <Fragment>
          <blog-post defaults={defaults} data={data instanceof Map ? Object.values(Object.fromEntries(data))[0] : data} />
        </Fragment>
      )}
    />

    <Route
      path="/community"
      render={() => {
        return (
          <Fragment>
            <community-page data={CommunityPageData} />
          </Fragment>
        )
      }}
    />

    <Route
      path="/terms"
      render={() => (
        <Fragment>
          <terms-service-page defaults={defaults} />
        </Fragment>
      )}
    />

    <Route
      path="/privacy"
      render={() => (
        <Fragment>
          <privacy-policy-page defaults={defaults} />
        </Fragment>
      )}
    />

    <Route
      path="/enterprise"
      render={() => (
        <Fragment>
          <enterprise-page data={EnterprisePageData} />
        </Fragment>
      )}
    />

    <Route
      path={match('/solution/:solutionId*')}
      render={(params) => (
        <Fragment>
          <solution-page solutionId={params.solutionId} defaults={defaults} />
        </Fragment>
      )}
    />

    <Route
      path={match('/:thing')}
      render={() => (
        <Fragment>
          <not-found-page defaults={defaults} />
        </Fragment>
      )}
    />

    <Route
      path={match('/:thing/:bing')}
      render={() => (
        <Fragment>
          <not-found-page defaults={defaults} />
        </Fragment>
      )}
    />

    <Route
      path={match('/:big/:giant/:elevator')}
      render={() => (
        <Fragment>
          <not-found-page defaults={defaults} />
        </Fragment>
      )}
    />
  </Router.Switch>
)

Router.on('change', (newUrl, _oldUrl) => {
  requestAnimationFrame(() => window.scrollTo(0, 0))
  if (newUrl.hash) {
    const id = newUrl.hash.slice(1)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView && el.scrollIntoView()
      }
    }, 50)
  }
})
