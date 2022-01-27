<template>
  <LNB />
  <RNB />
  <GlobalBanner />
  <TheHeader />
  <Billboard />
  <Direct />
  <HotFocus />
  <TimeDeal />
  <Airlift />
  <PlanBanner />
  <WideBanner />
  <BestProduct />
  <TodaysChance />

  <Promotion />
  <MdsRecommendation />
  <Partner />
  <TheFooter />
</template>

<script>
import LNB from '~/components/LNB'
import RNB from '~/components/RNB'
import TheHeader from '~/components/TheHeader'
import Billboard from './components/Billboard.vue'
import Direct from './components/Direct.vue'
import GlobalBanner from './components/GlobalBanner.vue'
import HotFocus from './components/HotFocus.vue'
import PlanBanner from './components/PlanBanner.vue'
import WideBanner from './components/WideBanner.vue'
import TimeDeal from './components/TimeDeal.vue'
import Promotion from './components/Promotion.vue'
import MdsRecommendation from './components/MdsRecommendation.vue'
import Partner from './components/Partner.vue'
import Airlift from './components/Airlift.vue'
import BestProduct from './components/BestProduct.vue'
import TodaysChance from './components/TodaysChance.vue'
import TheFooter from '~/components/TheFooter'

export default {
  components: {
    LNB,  // 지역등록
    RNB,
    GlobalBanner, 
    TheHeader,
    Billboard,
    Direct,
    HotFocus,
    PlanBanner,
    WideBanner,
    TimeDeal,
    Airlift,
    Promotion,
    MdsRecommendation,
    Partner,
    BestProduct,
    TodaysChance,
    TheFooter
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
</style>
