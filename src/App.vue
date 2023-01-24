<template class="app-container">
  <div class="app">
    <NavLinksView class="nav-links-view" />
    <router-view class="router-view" />
  </div>
  <AttributionView />
  <div class="nav-buttons">
    <div class="nav-button" v-if="route.path == '/'">
      <NextPageButton class="nav-button--right" to="/plan" />
    </div>
    <div class="nav-button" v-else-if="route.path == '/plan'">
      <GoBackButton class="nav-button--left" to="/" />
      <NextPageButton class="nav-button--right" to="/add-on" />
    </div>
    <div class="nav-button" v-else-if="route.path == '/add-on'">
      <GoBackButton class="nav-button--left" to="/plan" />
      <NextPageButton class="nav-button--right" to="/summary" />
    </div>
    <div class="nav-button" v-else-if="route.path == '/summary'">
      <GoBackButton class="nav-button--left" to="/add-on" />
      <ConfirmButton class="nav-button--right" to="/thank-you" />
    </div>
  </div>
</template>

<style scoped lang="less">
@import "./global.less";
.app {
  margin-left: 10px;
  margin-top: 5px;
  display: flex;
  width: calc(100% - 10px);
}
.router-view {
  display: flex;
  flex-direction: column;

  /* for other element can position: absolute */
  position: relative;

  margin: 10vh 10vw;
  flex-grow: 1000;
}
.nav-button--left {
  position: absolute;
  white-space: nowrap;

  --image-width: 274;
  --image-height: 568;
  --rendered-image-width: calc(
    95vh / (var(--image-height) / var(--image-width))
  );
  /* 10px from #app margin-left, --rendered-image-width from NavLinksView and 
  ** 10vw from router-view margin-right */
  left: calc(10px + var(--rendered-image-width) + 10vw);

  /* 5px from .app margin-top and 95vh from NavLinksView height */
  bottom: calc(100vh - 95vh - 5px);
}
.nav-button--right {
  position: absolute;
  white-space: nowrap;

  /* must be the same with router-view margin-right */
  right: 10vw;

  /* 5px from .app margin-top and 95vh from NavLinksView height */
  bottom: calc(100vh - 95vh - 5px);
}

@media (max-aspect-ratio: @max-aspect-ratio) {
  .app {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    margin-top: 0;
  }
  .router-view {
    position: absolute;
    top: 50%;
    left: 50%;
    background: var(--color-white);
    box-shadow: 4px 15px 20px var(--color-light-gray);
    margin: 0;
    border: 30px solid var(--color-white);
    border-radius: calc(var(--border-radius) * 2);
    transform: translate(-50%, -50%);
    width: 90vw;
  }
  .nav-button {
    position: absolute;
    bottom: 0;
    background: var(--color-white);
    width: 100vw;
    // height: 50px;
  }
  .nav-button--left,
  .nav-button--right {
    position: static;

    /* 90vw from router-view width */
    margin: 15px calc(50vw - (90vw / 2));
  }
  .nav-button--right {
    float: right;
  }
}
</style>

<script>
import NavLinksView from "./views/NavLinksView.vue";
import AttributionView from "./views/AttributionView.vue";
import NextPageButton from "./components/NextPageButton.vue";
import GoBackButton from "./components/GoBackButton.vue";
import ConfirmButton from "./components/ConfirmButton.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    NavLinksView,
    AttributionView,
    NextPageButton,
    GoBackButton,
    ConfirmButton,
  },
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
};
</script>
