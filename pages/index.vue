<template>
  <div class="home home-1 " id="list-of-sections">
    <Header1/>
    <Banner1/>
    <Banner2/>
    <Banner3/>
    <Tosubscribe/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header1 from '@/components/Header1.vue'
import Banner1 from '@/components/home1/Banner1.vue'
import Banner2 from '@/components/home1/Banner2.vue'
import Banner3 from '@/components/home1/Banner3.vue'
import Tosubscribe from '../components/home1/Tosubscribe.vue'
import Footer from '@/components/Footer.vue'



export default {
  components: {
    Header1,
    Banner1,
    Banner2,
    Banner3,
    Tosubscribe,
    Footer
  },
  data() {
    return {
      imgs: [
          {
            main: 'https://dm2302files.storage.live.com/y4mtnTYS2DvT7kk4ZW9Yd_li9CijPrHR3E8lIc4kn1TJUscu_RcgcjSRs2n7xZinbn_L_8sX47AusndCAEthe00gcb07DlRq8TsEOl9xDZojKRoTjkBehQlujGG2p1BF4GIC3tkHOcYd6IHrl-fGbmUM6nsqofWQcQIP6wLvVGj3uwiaGtFQ-Ijdqp7GIvrCY3C?width=800&height=519&cropmode=none',
            images: [
              'https://dm2302files.storage.live.com/y4mtnTYS2DvT7kk4ZW9Yd_li9CijPrHR3E8lIc4kn1TJUscu_RcgcjSRs2n7xZinbn_L_8sX47AusndCAEthe00gcb07DlRq8TsEOl9xDZojKRoTjkBehQlujGG2p1BF4GIC3tkHOcYd6IHrl-fGbmUM6nsqofWQcQIP6wLvVGj3uwiaGtFQ-Ijdqp7GIvrCY3C?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mCIA7VFbbOH5suW3JQtR9-tGXxdgTyB5W9_iZuTMmINHego57YmLZEEsG1b6K9A9ymEn8MkqpwKHV5JHMmOvBQqE-BswcOZ3uCx8J8Ked8rvU0-WbXgAPCFwBf0h4ovWPxCqCJ3cx_mIffqadh2w-_1qfmQZO8KAiJnzDW35-dgYGzeG1IYuDfJnv2bulx-Vd?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mwkFI4ZWRU4E-7nuTufR99pQTpciEvY6wnILJScmA-rUNTWOn0WbiA8FsgPGuVIAKUGEm8MBzf8hGuZdOOQdg_4Th1ZpSwaiYCuVxpoLEVXpi4FhA2BjGC6f4KDxunr6Z_ebebWJego_C9Pie1JmrhnsuybSLeeD73AiqJT0IN6O1gWI99fNtCcHXRg8Daya3?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4muOuZx67OdGRnowtpeBISgM46KaKNZI-5ruPgrDFOzaOKIgBPIY7ylnjBImypd89GsjAIOqdqy7csGYGQaXAJtujTEZ490qarvWap8MneSVhkPyoAI3sKfeeknq_RiRVD8h3762AvqDOqLrBVKWYWVlqWoDoXRPrc2GVbLtV-YPlKzaAP9IefKJKRDYcAa2RE?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4msm_wgSpsbWRyU-qgVlujgbpVg_V1Ifh-hD76y7wQVDq57q3x9ziUvAWy66KLkAhp5UlLbyiVhWmh68AZXex3xqQ4QkGZa1qzJXYHzhE4IeiaKhlJHDMmtrB32oyFcXfE3kXeQwQMRhJbta7N8Xs6806IfKlEUP0IXtW2M3DEIDnBn8TW5blgQwtUZENUKPRs?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mRaSS1MC0nXI6L_OxfA3_X_MnTUc-y-lGnDYJzmOagWWPqsO-4JTuuJxvM6SB2rlmow1FdJzprqqLoeSyD94-TOvpdXsGKBJz1ce0U4_tkP-nW8rfyyWZKxH-qn19rvgq2k6rNS2I4MGxpO94mYd-EjUNSKnJexeff6NYCFO0qrtMNUDRu5V3Pr59LYJQ9Nn7?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mOeCNKBBK0D1LHAGqUTKG3E7nC59NuU0kuM2757nf6DL-ieN9Dzjmmo2bvGgkBglcvd11iTzyxpofQeHyHdMhIkJkQ3DtulgnlhIt1ulhuMA-fHhNkmf__VHcZwxg9ykmzuKNk01167YyekjhmzGVAW-vqHQNoJoO18v2o__3IDRRhPuYsibPPpISIPYF14o0?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mdhRRjFH2a8LFHbpF-GuJfMIWDa-wjvU_SjYD6cICUEhb0yhKanMahMfVnuu_qW8ZDNklQkYx1Cm_0s2G5r7mqI-nEncXfikVSKsFBuVApI8eSB3dfoYV75zXPwHDNka9y4mrMAfWaQe0EU85PNNrtxzEKGE1cMCj1Kkd-n_RO3Fnd5U1l7L2Kh4y_BsrwZW1?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mc4jyT2njAhCLM4zVUW0RcwgZ9Ho0vi3m2Dr_LlWpQ6TdKgDIBp2cy5unDrLJXc297bz4D0TEJPeYUrJdHWez_4Vi2VlNmpabDU9Px5rDv08DG6JvNa-a09o-xyF4z5Rwum_m0XurhrrxIS3ssZHI8NDc9pGnVK6it1lwCiinRxgenoelGXYv1Hltkg5dnnDp?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mgIwXQ7NocQL3p4PdsHcqFzc3iBLxQZhMCtJnlNrqD3xZJldFgc55zWU4yvnya68_8Y2sauvuWjDPrUI_6yHRtBi-QIQgicLGYpBs64Sl-i8VWqNFrVw23k1gakmyB5527AOTOHHzxH_daQ1rHgkXZDHkeqF0HT65QrztkYUpVHyDIn9sO3YNoIex8IDPCuBd?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mVlslnZ0SNE_hZLqRUDxlzD0VzL6RmeGZU56q2eeXnV3PblSDq1XRxPzd7J2o_fZJBwZbNmK6GTZXbZp9c25MCb3VEBEMqH_6rVp_gdfzOCDenEcvTdohKqP6BZUlywVAro1zyfekPIVYuCnM-otVBZeLkVR-ZT3llEYDio6qLBs3NNMnZCpj5TIbu_tCpNmR?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4m63Jvy3EqehTo26Xizftp8_B7CI3pDEo7qEh4qlZQWWpvtRuNJrKJ7nKSHhlmgHSPFSx3ps2MTZyT7meT4Vo33pWYdbxlcPXFKqaY3z35bzD1UQQ0r5l_jB5XT0FEmIO-yd5_zIisV_JHFpPC1IoJGXlWaccO9_W1xrW4QbCIcsSs6_KrTOQ4B6oob8A1yumc?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mD4K3fEF8OrdEO0G4Nzd84nZWyCcDHnXm3khE05ADRDrru7VVmZdQ610geHro21h0jVOxeziV2_Atopc-fm6dhPHOvdhnL9CcD3v7Rd_IwJxTfnAQph2iA4LXENQO2cPbg2Z9gLYZVAZxhoIH44QysruUgDokFYDXihH1qHYdD88U8AFqaVyodaTfJD_D0bEl?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mViQIc6lBERmn_8FWvZZ5nTPzOsq7K-iH64O3BNN9eWtcI28GPCCv4h8mb4mBfUz1J9X6Cr8BuvSaczeQel5yZqZUoDwaYxwARQhVQNduAyhM6xUnMtMX3CwSQfKQrlCqiNH_UqNliK2l-Z6VKyTzv57pM9f6JxqSsBX75n1FnUhzRrFzkgSQLtyBjNDYGXj2?width=800&height=519&cropmode=none',
            ]
          },
          {
            main: 'https://dm2302files.storage.live.com/y4mCIA7VFbbOH5suW3JQtR9-tGXxdgTyB5W9_iZuTMmINHego57YmLZEEsG1b6K9A9ymEn8MkqpwKHV5JHMmOvBQqE-BswcOZ3uCx8J8Ked8rvU0-WbXgAPCFwBf0h4ovWPxCqCJ3cx_mIffqadh2w-_1qfmQZO8KAiJnzDW35-dgYGzeG1IYuDfJnv2bulx-Vd?width=800&height=519&cropmode=none',
            images: [
              'https://dm2302files.storage.live.com/y4mtnTYS2DvT7kk4ZW9Yd_li9CijPrHR3E8lIc4kn1TJUscu_RcgcjSRs2n7xZinbn_L_8sX47AusndCAEthe00gcb07DlRq8TsEOl9xDZojKRoTjkBehQlujGG2p1BF4GIC3tkHOcYd6IHrl-fGbmUM6nsqofWQcQIP6wLvVGj3uwiaGtFQ-Ijdqp7GIvrCY3C?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mCIA7VFbbOH5suW3JQtR9-tGXxdgTyB5W9_iZuTMmINHego57YmLZEEsG1b6K9A9ymEn8MkqpwKHV5JHMmOvBQqE-BswcOZ3uCx8J8Ked8rvU0-WbXgAPCFwBf0h4ovWPxCqCJ3cx_mIffqadh2w-_1qfmQZO8KAiJnzDW35-dgYGzeG1IYuDfJnv2bulx-Vd?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mwkFI4ZWRU4E-7nuTufR99pQTpciEvY6wnILJScmA-rUNTWOn0WbiA8FsgPGuVIAKUGEm8MBzf8hGuZdOOQdg_4Th1ZpSwaiYCuVxpoLEVXpi4FhA2BjGC6f4KDxunr6Z_ebebWJego_C9Pie1JmrhnsuybSLeeD73AiqJT0IN6O1gWI99fNtCcHXRg8Daya3?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4muOuZx67OdGRnowtpeBISgM46KaKNZI-5ruPgrDFOzaOKIgBPIY7ylnjBImypd89GsjAIOqdqy7csGYGQaXAJtujTEZ490qarvWap8MneSVhkPyoAI3sKfeeknq_RiRVD8h3762AvqDOqLrBVKWYWVlqWoDoXRPrc2GVbLtV-YPlKzaAP9IefKJKRDYcAa2RE?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4msm_wgSpsbWRyU-qgVlujgbpVg_V1Ifh-hD76y7wQVDq57q3x9ziUvAWy66KLkAhp5UlLbyiVhWmh68AZXex3xqQ4QkGZa1qzJXYHzhE4IeiaKhlJHDMmtrB32oyFcXfE3kXeQwQMRhJbta7N8Xs6806IfKlEUP0IXtW2M3DEIDnBn8TW5blgQwtUZENUKPRs?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mRaSS1MC0nXI6L_OxfA3_X_MnTUc-y-lGnDYJzmOagWWPqsO-4JTuuJxvM6SB2rlmow1FdJzprqqLoeSyD94-TOvpdXsGKBJz1ce0U4_tkP-nW8rfyyWZKxH-qn19rvgq2k6rNS2I4MGxpO94mYd-EjUNSKnJexeff6NYCFO0qrtMNUDRu5V3Pr59LYJQ9Nn7?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mOeCNKBBK0D1LHAGqUTKG3E7nC59NuU0kuM2757nf6DL-ieN9Dzjmmo2bvGgkBglcvd11iTzyxpofQeHyHdMhIkJkQ3DtulgnlhIt1ulhuMA-fHhNkmf__VHcZwxg9ykmzuKNk01167YyekjhmzGVAW-vqHQNoJoO18v2o__3IDRRhPuYsibPPpISIPYF14o0?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mdhRRjFH2a8LFHbpF-GuJfMIWDa-wjvU_SjYD6cICUEhb0yhKanMahMfVnuu_qW8ZDNklQkYx1Cm_0s2G5r7mqI-nEncXfikVSKsFBuVApI8eSB3dfoYV75zXPwHDNka9y4mrMAfWaQe0EU85PNNrtxzEKGE1cMCj1Kkd-n_RO3Fnd5U1l7L2Kh4y_BsrwZW1?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mc4jyT2njAhCLM4zVUW0RcwgZ9Ho0vi3m2Dr_LlWpQ6TdKgDIBp2cy5unDrLJXc297bz4D0TEJPeYUrJdHWez_4Vi2VlNmpabDU9Px5rDv08DG6JvNa-a09o-xyF4z5Rwum_m0XurhrrxIS3ssZHI8NDc9pGnVK6it1lwCiinRxgenoelGXYv1Hltkg5dnnDp?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mgIwXQ7NocQL3p4PdsHcqFzc3iBLxQZhMCtJnlNrqD3xZJldFgc55zWU4yvnya68_8Y2sauvuWjDPrUI_6yHRtBi-QIQgicLGYpBs64Sl-i8VWqNFrVw23k1gakmyB5527AOTOHHzxH_daQ1rHgkXZDHkeqF0HT65QrztkYUpVHyDIn9sO3YNoIex8IDPCuBd?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mVlslnZ0SNE_hZLqRUDxlzD0VzL6RmeGZU56q2eeXnV3PblSDq1XRxPzd7J2o_fZJBwZbNmK6GTZXbZp9c25MCb3VEBEMqH_6rVp_gdfzOCDenEcvTdohKqP6BZUlywVAro1zyfekPIVYuCnM-otVBZeLkVR-ZT3llEYDio6qLBs3NNMnZCpj5TIbu_tCpNmR?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4m63Jvy3EqehTo26Xizftp8_B7CI3pDEo7qEh4qlZQWWpvtRuNJrKJ7nKSHhlmgHSPFSx3ps2MTZyT7meT4Vo33pWYdbxlcPXFKqaY3z35bzD1UQQ0r5l_jB5XT0FEmIO-yd5_zIisV_JHFpPC1IoJGXlWaccO9_W1xrW4QbCIcsSs6_KrTOQ4B6oob8A1yumc?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mD4K3fEF8OrdEO0G4Nzd84nZWyCcDHnXm3khE05ADRDrru7VVmZdQ610geHro21h0jVOxeziV2_Atopc-fm6dhPHOvdhnL9CcD3v7Rd_IwJxTfnAQph2iA4LXENQO2cPbg2Z9gLYZVAZxhoIH44QysruUgDokFYDXihH1qHYdD88U8AFqaVyodaTfJD_D0bEl?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mViQIc6lBERmn_8FWvZZ5nTPzOsq7K-iH64O3BNN9eWtcI28GPCCv4h8mb4mBfUz1J9X6Cr8BuvSaczeQel5yZqZUoDwaYxwARQhVQNduAyhM6xUnMtMX3CwSQfKQrlCqiNH_UqNliK2l-Z6VKyTzv57pM9f6JxqSsBX75n1FnUhzRrFzkgSQLtyBjNDYGXj2?width=800&height=519&cropmode=none',
            ]
          },
          {
            main: 'https://dm2302files.storage.live.com/y4mwkFI4ZWRU4E-7nuTufR99pQTpciEvY6wnILJScmA-rUNTWOn0WbiA8FsgPGuVIAKUGEm8MBzf8hGuZdOOQdg_4Th1ZpSwaiYCuVxpoLEVXpi4FhA2BjGC6f4KDxunr6Z_ebebWJego_C9Pie1JmrhnsuybSLeeD73AiqJT0IN6O1gWI99fNtCcHXRg8Daya3?width=800&height=519&cropmode=none',
            images: [
              'https://dm2302files.storage.live.com/y4mtnTYS2DvT7kk4ZW9Yd_li9CijPrHR3E8lIc4kn1TJUscu_RcgcjSRs2n7xZinbn_L_8sX47AusndCAEthe00gcb07DlRq8TsEOl9xDZojKRoTjkBehQlujGG2p1BF4GIC3tkHOcYd6IHrl-fGbmUM6nsqofWQcQIP6wLvVGj3uwiaGtFQ-Ijdqp7GIvrCY3C?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mCIA7VFbbOH5suW3JQtR9-tGXxdgTyB5W9_iZuTMmINHego57YmLZEEsG1b6K9A9ymEn8MkqpwKHV5JHMmOvBQqE-BswcOZ3uCx8J8Ked8rvU0-WbXgAPCFwBf0h4ovWPxCqCJ3cx_mIffqadh2w-_1qfmQZO8KAiJnzDW35-dgYGzeG1IYuDfJnv2bulx-Vd?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mwkFI4ZWRU4E-7nuTufR99pQTpciEvY6wnILJScmA-rUNTWOn0WbiA8FsgPGuVIAKUGEm8MBzf8hGuZdOOQdg_4Th1ZpSwaiYCuVxpoLEVXpi4FhA2BjGC6f4KDxunr6Z_ebebWJego_C9Pie1JmrhnsuybSLeeD73AiqJT0IN6O1gWI99fNtCcHXRg8Daya3?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4muOuZx67OdGRnowtpeBISgM46KaKNZI-5ruPgrDFOzaOKIgBPIY7ylnjBImypd89GsjAIOqdqy7csGYGQaXAJtujTEZ490qarvWap8MneSVhkPyoAI3sKfeeknq_RiRVD8h3762AvqDOqLrBVKWYWVlqWoDoXRPrc2GVbLtV-YPlKzaAP9IefKJKRDYcAa2RE?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4msm_wgSpsbWRyU-qgVlujgbpVg_V1Ifh-hD76y7wQVDq57q3x9ziUvAWy66KLkAhp5UlLbyiVhWmh68AZXex3xqQ4QkGZa1qzJXYHzhE4IeiaKhlJHDMmtrB32oyFcXfE3kXeQwQMRhJbta7N8Xs6806IfKlEUP0IXtW2M3DEIDnBn8TW5blgQwtUZENUKPRs?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mRaSS1MC0nXI6L_OxfA3_X_MnTUc-y-lGnDYJzmOagWWPqsO-4JTuuJxvM6SB2rlmow1FdJzprqqLoeSyD94-TOvpdXsGKBJz1ce0U4_tkP-nW8rfyyWZKxH-qn19rvgq2k6rNS2I4MGxpO94mYd-EjUNSKnJexeff6NYCFO0qrtMNUDRu5V3Pr59LYJQ9Nn7?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mOeCNKBBK0D1LHAGqUTKG3E7nC59NuU0kuM2757nf6DL-ieN9Dzjmmo2bvGgkBglcvd11iTzyxpofQeHyHdMhIkJkQ3DtulgnlhIt1ulhuMA-fHhNkmf__VHcZwxg9ykmzuKNk01167YyekjhmzGVAW-vqHQNoJoO18v2o__3IDRRhPuYsibPPpISIPYF14o0?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mdhRRjFH2a8LFHbpF-GuJfMIWDa-wjvU_SjYD6cICUEhb0yhKanMahMfVnuu_qW8ZDNklQkYx1Cm_0s2G5r7mqI-nEncXfikVSKsFBuVApI8eSB3dfoYV75zXPwHDNka9y4mrMAfWaQe0EU85PNNrtxzEKGE1cMCj1Kkd-n_RO3Fnd5U1l7L2Kh4y_BsrwZW1?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mc4jyT2njAhCLM4zVUW0RcwgZ9Ho0vi3m2Dr_LlWpQ6TdKgDIBp2cy5unDrLJXc297bz4D0TEJPeYUrJdHWez_4Vi2VlNmpabDU9Px5rDv08DG6JvNa-a09o-xyF4z5Rwum_m0XurhrrxIS3ssZHI8NDc9pGnVK6it1lwCiinRxgenoelGXYv1Hltkg5dnnDp?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mgIwXQ7NocQL3p4PdsHcqFzc3iBLxQZhMCtJnlNrqD3xZJldFgc55zWU4yvnya68_8Y2sauvuWjDPrUI_6yHRtBi-QIQgicLGYpBs64Sl-i8VWqNFrVw23k1gakmyB5527AOTOHHzxH_daQ1rHgkXZDHkeqF0HT65QrztkYUpVHyDIn9sO3YNoIex8IDPCuBd?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mVlslnZ0SNE_hZLqRUDxlzD0VzL6RmeGZU56q2eeXnV3PblSDq1XRxPzd7J2o_fZJBwZbNmK6GTZXbZp9c25MCb3VEBEMqH_6rVp_gdfzOCDenEcvTdohKqP6BZUlywVAro1zyfekPIVYuCnM-otVBZeLkVR-ZT3llEYDio6qLBs3NNMnZCpj5TIbu_tCpNmR?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4m63Jvy3EqehTo26Xizftp8_B7CI3pDEo7qEh4qlZQWWpvtRuNJrKJ7nKSHhlmgHSPFSx3ps2MTZyT7meT4Vo33pWYdbxlcPXFKqaY3z35bzD1UQQ0r5l_jB5XT0FEmIO-yd5_zIisV_JHFpPC1IoJGXlWaccO9_W1xrW4QbCIcsSs6_KrTOQ4B6oob8A1yumc?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mD4K3fEF8OrdEO0G4Nzd84nZWyCcDHnXm3khE05ADRDrru7VVmZdQ610geHro21h0jVOxeziV2_Atopc-fm6dhPHOvdhnL9CcD3v7Rd_IwJxTfnAQph2iA4LXENQO2cPbg2Z9gLYZVAZxhoIH44QysruUgDokFYDXihH1qHYdD88U8AFqaVyodaTfJD_D0bEl?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mViQIc6lBERmn_8FWvZZ5nTPzOsq7K-iH64O3BNN9eWtcI28GPCCv4h8mb4mBfUz1J9X6Cr8BuvSaczeQel5yZqZUoDwaYxwARQhVQNduAyhM6xUnMtMX3CwSQfKQrlCqiNH_UqNliK2l-Z6VKyTzv57pM9f6JxqSsBX75n1FnUhzRrFzkgSQLtyBjNDYGXj2?width=800&height=519&cropmode=none',
            ]
          },
          {
            main: 'https://dm2302files.storage.live.com/y4muOuZx67OdGRnowtpeBISgM46KaKNZI-5ruPgrDFOzaOKIgBPIY7ylnjBImypd89GsjAIOqdqy7csGYGQaXAJtujTEZ490qarvWap8MneSVhkPyoAI3sKfeeknq_RiRVD8h3762AvqDOqLrBVKWYWVlqWoDoXRPrc2GVbLtV-YPlKzaAP9IefKJKRDYcAa2RE?width=800&height=519&cropmode=none',
            images: [
              'https://dm2302files.storage.live.com/y4mtnTYS2DvT7kk4ZW9Yd_li9CijPrHR3E8lIc4kn1TJUscu_RcgcjSRs2n7xZinbn_L_8sX47AusndCAEthe00gcb07DlRq8TsEOl9xDZojKRoTjkBehQlujGG2p1BF4GIC3tkHOcYd6IHrl-fGbmUM6nsqofWQcQIP6wLvVGj3uwiaGtFQ-Ijdqp7GIvrCY3C?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mCIA7VFbbOH5suW3JQtR9-tGXxdgTyB5W9_iZuTMmINHego57YmLZEEsG1b6K9A9ymEn8MkqpwKHV5JHMmOvBQqE-BswcOZ3uCx8J8Ked8rvU0-WbXgAPCFwBf0h4ovWPxCqCJ3cx_mIffqadh2w-_1qfmQZO8KAiJnzDW35-dgYGzeG1IYuDfJnv2bulx-Vd?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mwkFI4ZWRU4E-7nuTufR99pQTpciEvY6wnILJScmA-rUNTWOn0WbiA8FsgPGuVIAKUGEm8MBzf8hGuZdOOQdg_4Th1ZpSwaiYCuVxpoLEVXpi4FhA2BjGC6f4KDxunr6Z_ebebWJego_C9Pie1JmrhnsuybSLeeD73AiqJT0IN6O1gWI99fNtCcHXRg8Daya3?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4muOuZx67OdGRnowtpeBISgM46KaKNZI-5ruPgrDFOzaOKIgBPIY7ylnjBImypd89GsjAIOqdqy7csGYGQaXAJtujTEZ490qarvWap8MneSVhkPyoAI3sKfeeknq_RiRVD8h3762AvqDOqLrBVKWYWVlqWoDoXRPrc2GVbLtV-YPlKzaAP9IefKJKRDYcAa2RE?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4msm_wgSpsbWRyU-qgVlujgbpVg_V1Ifh-hD76y7wQVDq57q3x9ziUvAWy66KLkAhp5UlLbyiVhWmh68AZXex3xqQ4QkGZa1qzJXYHzhE4IeiaKhlJHDMmtrB32oyFcXfE3kXeQwQMRhJbta7N8Xs6806IfKlEUP0IXtW2M3DEIDnBn8TW5blgQwtUZENUKPRs?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mRaSS1MC0nXI6L_OxfA3_X_MnTUc-y-lGnDYJzmOagWWPqsO-4JTuuJxvM6SB2rlmow1FdJzprqqLoeSyD94-TOvpdXsGKBJz1ce0U4_tkP-nW8rfyyWZKxH-qn19rvgq2k6rNS2I4MGxpO94mYd-EjUNSKnJexeff6NYCFO0qrtMNUDRu5V3Pr59LYJQ9Nn7?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mOeCNKBBK0D1LHAGqUTKG3E7nC59NuU0kuM2757nf6DL-ieN9Dzjmmo2bvGgkBglcvd11iTzyxpofQeHyHdMhIkJkQ3DtulgnlhIt1ulhuMA-fHhNkmf__VHcZwxg9ykmzuKNk01167YyekjhmzGVAW-vqHQNoJoO18v2o__3IDRRhPuYsibPPpISIPYF14o0?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mdhRRjFH2a8LFHbpF-GuJfMIWDa-wjvU_SjYD6cICUEhb0yhKanMahMfVnuu_qW8ZDNklQkYx1Cm_0s2G5r7mqI-nEncXfikVSKsFBuVApI8eSB3dfoYV75zXPwHDNka9y4mrMAfWaQe0EU85PNNrtxzEKGE1cMCj1Kkd-n_RO3Fnd5U1l7L2Kh4y_BsrwZW1?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mc4jyT2njAhCLM4zVUW0RcwgZ9Ho0vi3m2Dr_LlWpQ6TdKgDIBp2cy5unDrLJXc297bz4D0TEJPeYUrJdHWez_4Vi2VlNmpabDU9Px5rDv08DG6JvNa-a09o-xyF4z5Rwum_m0XurhrrxIS3ssZHI8NDc9pGnVK6it1lwCiinRxgenoelGXYv1Hltkg5dnnDp?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mgIwXQ7NocQL3p4PdsHcqFzc3iBLxQZhMCtJnlNrqD3xZJldFgc55zWU4yvnya68_8Y2sauvuWjDPrUI_6yHRtBi-QIQgicLGYpBs64Sl-i8VWqNFrVw23k1gakmyB5527AOTOHHzxH_daQ1rHgkXZDHkeqF0HT65QrztkYUpVHyDIn9sO3YNoIex8IDPCuBd?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mVlslnZ0SNE_hZLqRUDxlzD0VzL6RmeGZU56q2eeXnV3PblSDq1XRxPzd7J2o_fZJBwZbNmK6GTZXbZp9c25MCb3VEBEMqH_6rVp_gdfzOCDenEcvTdohKqP6BZUlywVAro1zyfekPIVYuCnM-otVBZeLkVR-ZT3llEYDio6qLBs3NNMnZCpj5TIbu_tCpNmR?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4m63Jvy3EqehTo26Xizftp8_B7CI3pDEo7qEh4qlZQWWpvtRuNJrKJ7nKSHhlmgHSPFSx3ps2MTZyT7meT4Vo33pWYdbxlcPXFKqaY3z35bzD1UQQ0r5l_jB5XT0FEmIO-yd5_zIisV_JHFpPC1IoJGXlWaccO9_W1xrW4QbCIcsSs6_KrTOQ4B6oob8A1yumc?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mD4K3fEF8OrdEO0G4Nzd84nZWyCcDHnXm3khE05ADRDrru7VVmZdQ610geHro21h0jVOxeziV2_Atopc-fm6dhPHOvdhnL9CcD3v7Rd_IwJxTfnAQph2iA4LXENQO2cPbg2Z9gLYZVAZxhoIH44QysruUgDokFYDXihH1qHYdD88U8AFqaVyodaTfJD_D0bEl?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mViQIc6lBERmn_8FWvZZ5nTPzOsq7K-iH64O3BNN9eWtcI28GPCCv4h8mb4mBfUz1J9X6Cr8BuvSaczeQel5yZqZUoDwaYxwARQhVQNduAyhM6xUnMtMX3CwSQfKQrlCqiNH_UqNliK2l-Z6VKyTzv57pM9f6JxqSsBX75n1FnUhzRrFzkgSQLtyBjNDYGXj2?width=800&height=519&cropmode=none',
            ]
          },
          {
            main: 'https://dm2302files.storage.live.com/y4msm_wgSpsbWRyU-qgVlujgbpVg_V1Ifh-hD76y7wQVDq57q3x9ziUvAWy66KLkAhp5UlLbyiVhWmh68AZXex3xqQ4QkGZa1qzJXYHzhE4IeiaKhlJHDMmtrB32oyFcXfE3kXeQwQMRhJbta7N8Xs6806IfKlEUP0IXtW2M3DEIDnBn8TW5blgQwtUZENUKPRs?width=800&height=519&cropmode=none',
            images: [
              'https://dm2302files.storage.live.com/y4mtnTYS2DvT7kk4ZW9Yd_li9CijPrHR3E8lIc4kn1TJUscu_RcgcjSRs2n7xZinbn_L_8sX47AusndCAEthe00gcb07DlRq8TsEOl9xDZojKRoTjkBehQlujGG2p1BF4GIC3tkHOcYd6IHrl-fGbmUM6nsqofWQcQIP6wLvVGj3uwiaGtFQ-Ijdqp7GIvrCY3C?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mCIA7VFbbOH5suW3JQtR9-tGXxdgTyB5W9_iZuTMmINHego57YmLZEEsG1b6K9A9ymEn8MkqpwKHV5JHMmOvBQqE-BswcOZ3uCx8J8Ked8rvU0-WbXgAPCFwBf0h4ovWPxCqCJ3cx_mIffqadh2w-_1qfmQZO8KAiJnzDW35-dgYGzeG1IYuDfJnv2bulx-Vd?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mwkFI4ZWRU4E-7nuTufR99pQTpciEvY6wnILJScmA-rUNTWOn0WbiA8FsgPGuVIAKUGEm8MBzf8hGuZdOOQdg_4Th1ZpSwaiYCuVxpoLEVXpi4FhA2BjGC6f4KDxunr6Z_ebebWJego_C9Pie1JmrhnsuybSLeeD73AiqJT0IN6O1gWI99fNtCcHXRg8Daya3?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4muOuZx67OdGRnowtpeBISgM46KaKNZI-5ruPgrDFOzaOKIgBPIY7ylnjBImypd89GsjAIOqdqy7csGYGQaXAJtujTEZ490qarvWap8MneSVhkPyoAI3sKfeeknq_RiRVD8h3762AvqDOqLrBVKWYWVlqWoDoXRPrc2GVbLtV-YPlKzaAP9IefKJKRDYcAa2RE?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4msm_wgSpsbWRyU-qgVlujgbpVg_V1Ifh-hD76y7wQVDq57q3x9ziUvAWy66KLkAhp5UlLbyiVhWmh68AZXex3xqQ4QkGZa1qzJXYHzhE4IeiaKhlJHDMmtrB32oyFcXfE3kXeQwQMRhJbta7N8Xs6806IfKlEUP0IXtW2M3DEIDnBn8TW5blgQwtUZENUKPRs?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mRaSS1MC0nXI6L_OxfA3_X_MnTUc-y-lGnDYJzmOagWWPqsO-4JTuuJxvM6SB2rlmow1FdJzprqqLoeSyD94-TOvpdXsGKBJz1ce0U4_tkP-nW8rfyyWZKxH-qn19rvgq2k6rNS2I4MGxpO94mYd-EjUNSKnJexeff6NYCFO0qrtMNUDRu5V3Pr59LYJQ9Nn7?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mOeCNKBBK0D1LHAGqUTKG3E7nC59NuU0kuM2757nf6DL-ieN9Dzjmmo2bvGgkBglcvd11iTzyxpofQeHyHdMhIkJkQ3DtulgnlhIt1ulhuMA-fHhNkmf__VHcZwxg9ykmzuKNk01167YyekjhmzGVAW-vqHQNoJoO18v2o__3IDRRhPuYsibPPpISIPYF14o0?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mdhRRjFH2a8LFHbpF-GuJfMIWDa-wjvU_SjYD6cICUEhb0yhKanMahMfVnuu_qW8ZDNklQkYx1Cm_0s2G5r7mqI-nEncXfikVSKsFBuVApI8eSB3dfoYV75zXPwHDNka9y4mrMAfWaQe0EU85PNNrtxzEKGE1cMCj1Kkd-n_RO3Fnd5U1l7L2Kh4y_BsrwZW1?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mc4jyT2njAhCLM4zVUW0RcwgZ9Ho0vi3m2Dr_LlWpQ6TdKgDIBp2cy5unDrLJXc297bz4D0TEJPeYUrJdHWez_4Vi2VlNmpabDU9Px5rDv08DG6JvNa-a09o-xyF4z5Rwum_m0XurhrrxIS3ssZHI8NDc9pGnVK6it1lwCiinRxgenoelGXYv1Hltkg5dnnDp?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mgIwXQ7NocQL3p4PdsHcqFzc3iBLxQZhMCtJnlNrqD3xZJldFgc55zWU4yvnya68_8Y2sauvuWjDPrUI_6yHRtBi-QIQgicLGYpBs64Sl-i8VWqNFrVw23k1gakmyB5527AOTOHHzxH_daQ1rHgkXZDHkeqF0HT65QrztkYUpVHyDIn9sO3YNoIex8IDPCuBd?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mVlslnZ0SNE_hZLqRUDxlzD0VzL6RmeGZU56q2eeXnV3PblSDq1XRxPzd7J2o_fZJBwZbNmK6GTZXbZp9c25MCb3VEBEMqH_6rVp_gdfzOCDenEcvTdohKqP6BZUlywVAro1zyfekPIVYuCnM-otVBZeLkVR-ZT3llEYDio6qLBs3NNMnZCpj5TIbu_tCpNmR?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4m63Jvy3EqehTo26Xizftp8_B7CI3pDEo7qEh4qlZQWWpvtRuNJrKJ7nKSHhlmgHSPFSx3ps2MTZyT7meT4Vo33pWYdbxlcPXFKqaY3z35bzD1UQQ0r5l_jB5XT0FEmIO-yd5_zIisV_JHFpPC1IoJGXlWaccO9_W1xrW4QbCIcsSs6_KrTOQ4B6oob8A1yumc?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mD4K3fEF8OrdEO0G4Nzd84nZWyCcDHnXm3khE05ADRDrru7VVmZdQ610geHro21h0jVOxeziV2_Atopc-fm6dhPHOvdhnL9CcD3v7Rd_IwJxTfnAQph2iA4LXENQO2cPbg2Z9gLYZVAZxhoIH44QysruUgDokFYDXihH1qHYdD88U8AFqaVyodaTfJD_D0bEl?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mViQIc6lBERmn_8FWvZZ5nTPzOsq7K-iH64O3BNN9eWtcI28GPCCv4h8mb4mBfUz1J9X6Cr8BuvSaczeQel5yZqZUoDwaYxwARQhVQNduAyhM6xUnMtMX3CwSQfKQrlCqiNH_UqNliK2l-Z6VKyTzv57pM9f6JxqSsBX75n1FnUhzRrFzkgSQLtyBjNDYGXj2?width=800&height=519&cropmode=none',
            ]
          },
          {
            main: 'https://dm2302files.storage.live.com/y4mRaSS1MC0nXI6L_OxfA3_X_MnTUc-y-lGnDYJzmOagWWPqsO-4JTuuJxvM6SB2rlmow1FdJzprqqLoeSyD94-TOvpdXsGKBJz1ce0U4_tkP-nW8rfyyWZKxH-qn19rvgq2k6rNS2I4MGxpO94mYd-EjUNSKnJexeff6NYCFO0qrtMNUDRu5V3Pr59LYJQ9Nn7?width=800&height=519&cropmode=none',
            images: [
              'https://dm2302files.storage.live.com/y4mtnTYS2DvT7kk4ZW9Yd_li9CijPrHR3E8lIc4kn1TJUscu_RcgcjSRs2n7xZinbn_L_8sX47AusndCAEthe00gcb07DlRq8TsEOl9xDZojKRoTjkBehQlujGG2p1BF4GIC3tkHOcYd6IHrl-fGbmUM6nsqofWQcQIP6wLvVGj3uwiaGtFQ-Ijdqp7GIvrCY3C?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mCIA7VFbbOH5suW3JQtR9-tGXxdgTyB5W9_iZuTMmINHego57YmLZEEsG1b6K9A9ymEn8MkqpwKHV5JHMmOvBQqE-BswcOZ3uCx8J8Ked8rvU0-WbXgAPCFwBf0h4ovWPxCqCJ3cx_mIffqadh2w-_1qfmQZO8KAiJnzDW35-dgYGzeG1IYuDfJnv2bulx-Vd?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mwkFI4ZWRU4E-7nuTufR99pQTpciEvY6wnILJScmA-rUNTWOn0WbiA8FsgPGuVIAKUGEm8MBzf8hGuZdOOQdg_4Th1ZpSwaiYCuVxpoLEVXpi4FhA2BjGC6f4KDxunr6Z_ebebWJego_C9Pie1JmrhnsuybSLeeD73AiqJT0IN6O1gWI99fNtCcHXRg8Daya3?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4muOuZx67OdGRnowtpeBISgM46KaKNZI-5ruPgrDFOzaOKIgBPIY7ylnjBImypd89GsjAIOqdqy7csGYGQaXAJtujTEZ490qarvWap8MneSVhkPyoAI3sKfeeknq_RiRVD8h3762AvqDOqLrBVKWYWVlqWoDoXRPrc2GVbLtV-YPlKzaAP9IefKJKRDYcAa2RE?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4msm_wgSpsbWRyU-qgVlujgbpVg_V1Ifh-hD76y7wQVDq57q3x9ziUvAWy66KLkAhp5UlLbyiVhWmh68AZXex3xqQ4QkGZa1qzJXYHzhE4IeiaKhlJHDMmtrB32oyFcXfE3kXeQwQMRhJbta7N8Xs6806IfKlEUP0IXtW2M3DEIDnBn8TW5blgQwtUZENUKPRs?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mRaSS1MC0nXI6L_OxfA3_X_MnTUc-y-lGnDYJzmOagWWPqsO-4JTuuJxvM6SB2rlmow1FdJzprqqLoeSyD94-TOvpdXsGKBJz1ce0U4_tkP-nW8rfyyWZKxH-qn19rvgq2k6rNS2I4MGxpO94mYd-EjUNSKnJexeff6NYCFO0qrtMNUDRu5V3Pr59LYJQ9Nn7?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mOeCNKBBK0D1LHAGqUTKG3E7nC59NuU0kuM2757nf6DL-ieN9Dzjmmo2bvGgkBglcvd11iTzyxpofQeHyHdMhIkJkQ3DtulgnlhIt1ulhuMA-fHhNkmf__VHcZwxg9ykmzuKNk01167YyekjhmzGVAW-vqHQNoJoO18v2o__3IDRRhPuYsibPPpISIPYF14o0?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mdhRRjFH2a8LFHbpF-GuJfMIWDa-wjvU_SjYD6cICUEhb0yhKanMahMfVnuu_qW8ZDNklQkYx1Cm_0s2G5r7mqI-nEncXfikVSKsFBuVApI8eSB3dfoYV75zXPwHDNka9y4mrMAfWaQe0EU85PNNrtxzEKGE1cMCj1Kkd-n_RO3Fnd5U1l7L2Kh4y_BsrwZW1?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mc4jyT2njAhCLM4zVUW0RcwgZ9Ho0vi3m2Dr_LlWpQ6TdKgDIBp2cy5unDrLJXc297bz4D0TEJPeYUrJdHWez_4Vi2VlNmpabDU9Px5rDv08DG6JvNa-a09o-xyF4z5Rwum_m0XurhrrxIS3ssZHI8NDc9pGnVK6it1lwCiinRxgenoelGXYv1Hltkg5dnnDp?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mgIwXQ7NocQL3p4PdsHcqFzc3iBLxQZhMCtJnlNrqD3xZJldFgc55zWU4yvnya68_8Y2sauvuWjDPrUI_6yHRtBi-QIQgicLGYpBs64Sl-i8VWqNFrVw23k1gakmyB5527AOTOHHzxH_daQ1rHgkXZDHkeqF0HT65QrztkYUpVHyDIn9sO3YNoIex8IDPCuBd?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mVlslnZ0SNE_hZLqRUDxlzD0VzL6RmeGZU56q2eeXnV3PblSDq1XRxPzd7J2o_fZJBwZbNmK6GTZXbZp9c25MCb3VEBEMqH_6rVp_gdfzOCDenEcvTdohKqP6BZUlywVAro1zyfekPIVYuCnM-otVBZeLkVR-ZT3llEYDio6qLBs3NNMnZCpj5TIbu_tCpNmR?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4m63Jvy3EqehTo26Xizftp8_B7CI3pDEo7qEh4qlZQWWpvtRuNJrKJ7nKSHhlmgHSPFSx3ps2MTZyT7meT4Vo33pWYdbxlcPXFKqaY3z35bzD1UQQ0r5l_jB5XT0FEmIO-yd5_zIisV_JHFpPC1IoJGXlWaccO9_W1xrW4QbCIcsSs6_KrTOQ4B6oob8A1yumc?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mD4K3fEF8OrdEO0G4Nzd84nZWyCcDHnXm3khE05ADRDrru7VVmZdQ610geHro21h0jVOxeziV2_Atopc-fm6dhPHOvdhnL9CcD3v7Rd_IwJxTfnAQph2iA4LXENQO2cPbg2Z9gLYZVAZxhoIH44QysruUgDokFYDXihH1qHYdD88U8AFqaVyodaTfJD_D0bEl?width=800&height=519&cropmode=none',
              'https://dm2302files.storage.live.com/y4mViQIc6lBERmn_8FWvZZ5nTPzOsq7K-iH64O3BNN9eWtcI28GPCCv4h8mb4mBfUz1J9X6Cr8BuvSaczeQel5yZqZUoDwaYxwARQhVQNduAyhM6xUnMtMX3CwSQfKQrlCqiNH_UqNliK2l-Z6VKyTzv57pM9f6JxqSsBX75n1FnUhzRrFzkgSQLtyBjNDYGXj2?width=800&height=519&cropmode=none',
            ]
          }
      ],
      about: {
        subtitle: 'PROGRAMA INGLÉS',
        title: 'Are you ready <br>to improve?',
        description: 'Es el momento de mejorar tu nivel de inglés para  dar un impulso a tu carrera profesional y a tu apertura al mundo!',
        textbtn: 'Programa Ingles',
        urlbtn: '#',
      },
      opt: {
        title: 'Un espacio de<br>“coliving”',
        subtitle:'QUÉ OFRECEMOS',
        desc: 'Una forma distinta de ver el trabajo en la que este se considera como parte integral del estilo de vida, y no como un compartimento diferenciado al ocio.<br><br> En LifeBreak podrás trabajar cómodamente además de disfrutar de las instalaciones y las variadas actividades que ofrecemos.<br><br> El propósito de nuestro coliving es crear un ambiente internacional y relaciones que vayan más allá de lo profesional, buscando interacciones de aprendizaje y colaboración entre los profesionales que lo habitan y los voluntarios internacionales que ayudan en el proyecto.',
        boxs: [
          {
            title: 'COWORKING',
            image:require('@/assets/img/home/s1.jpg')
          },
          {
            title: 'SERVICIOS',
            image: require('@/assets/img/home/s2.jpg')
          },
          {
            title: 'ROOMS',
            image: require('@/assets/img/home/s3.jpg')
          }
        ],
        background: 'url(https://demo2wpopal.b-cdn.net/co-workshop/wp-content/uploads/2018/11/bgoc-1.png)'
      }
    }
  }
}
</script>
