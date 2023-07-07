<template>
  <div class="max-w-600px px-32px mx-auto sm:px-40px">
    <div v-if="subscribe" class="bg-red absolute top-[-78px] left-0 right-0 flex flex-col items-center justify-center py-12px duration-500ms z-999" :class="[superDiscount.theme ? '!bg-blue' : '!bg-red', {'!top-0 !fixed': blockFixed}]">
      <p class="p-0 m-0 block font-800 text-18px leading-normal">
        {{ $t('landingViewVP5.discount', {discount: pickedTarifParams.discount}) }}
      </p>
      <p class="p-0 m-0 block font-800 text-18px leading-normal text-[#fff]">
        {{ $t('landingViewVP5.expires2') }}
        <countdown
            v-model:restart="timerRestarter"
            class="inline"
        />
      </p>
    </div>

    <div id="topPage" class="flex flex-col">
      <h2 class="m-0 mx-auto mb-16px text-24px leading-normal text-center font-display font-600 sm:text-36px sm:leading-normal" v-html="$t('landingViewVP5_v2.title', {purpose: $t(`home.tracks.purpose.${purpose}`)} )" />
      <div id="trigger1" class="text-center mb-0">
        <div class="text-16px leading-normal sm:text-20px sm:leading-normal">
          <span
              v-if="AddPurposeCom"
              class=""
              v-html="$t('landingViewVP5.addGoals', {purpose: $t(`home.tracks.purpose.${purpose}`), addPurpose: $t(`home.tracks.addpurpose.${addpurpose}`)})"
          />
          <span
              v-if="!AddPurposeCom"
              class=""
              v-html="$t('landingViewVP5.goals', {purpose: $t(`home.tracks.purpose.${purpose}`)})"
          />
        </div>
        <div class="text-red font-700 text-20px leading-normal flex w-full mx-auto relative justify-center min-h-30px sm:text-24px sm:leading-normal sm:min-h-36px">
          <transition name="slide-fade">
            <span v-if="show" class="relative transform translate-x-0 translate-y-0">{{ $t('landingViewVP5.date', { dataPP3 }) }}</span>
          </transition>
        </div>
      </div>

      <div class="mt-32px mx-auto text-center w-full sm:max-w-520px">
        <lottie-animation
            ref="content.ref"
            :animationData="require(`@/assets/images/json/Step_1_1.json`)"
            :loop="false"
            :autoPlay="true"
            :speed="1"
            @loopComplete="loopComplete"
            @complete="complete"
            @enterFrame="enterFrame"
            @segmentStart="segmentStart"
            @stopped="stopped"
        />
        <div class="flex justify-between mx-[12%]">
          <p class="m-0 mt-9px text-12px leading-normal text-body sm:text-18px sm:leading-normal sm:mt-12px"
             v-for="(_, idx) of new Array(6)"
             :key="idx">
            {{setDate(idx)}}
          </p>
        </div>
      </div>
      <p class="!text-14px mt-24px !leading-normal max-w-450px mx-auto opacity-50 text-center sm:max-w-520px">
        {{ $t('landingViewVP5.diagram') }}
      </p>
      <div id="Benefits" class="py-32px">
        <h2
            class="font-display font-600 mb-24px text-20px leading-normal mx-auto text-center sm:text-24px sm:leading-normal sm:mb-52px"
        >
          {{ $t('landingViewVP5_v2.benefits') }}
        </h2>
        <ul class="max-w-310px m-0 mx-auto mb-32px p-0 sm:max-w-375px">
          <li class="list-none flex items-center text-16px leading-normal mb-16px sm:text-18px sm:leading-normal">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:w-24px sm:h-24px" />
            <p v-html="$t('landingViewVP5.firstBenefit', {purpose: $t(`home.tracks.purpose.${purpose}`)})" />
          </li>
          <li v-if="!addItem" class="list-none flex items-center text-16px leading-normal mb-16px sm:text-18px sm:leading-normal">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:w-24px sm:h-24px" />
            <p v-html="$t('landingViewVP5.secondBenefit', {addPurpose: $t(`home.tracks.addpurpose.${addpurpose}`)})" />
          </li>
          <li v-if="addItem" class="list-none flex items-center text-16px leading-normal mb-16px sm:text-18px sm:leading-normal">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:w-24px sm:h-24px" />
            <p v-html="$t('landingViewVP5.thirdBenefit')" />
          </li>
          <li v-if="addItem" class="list-none flex items-center text-16px leading-normal mb-16px sm:text-18px sm:leading-normal">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:w-24px sm:h-24px" />
            <p v-html="$t('landingViewVP5.fourthBenefit')" />
          </li>
          <li class="list-none flex items-center text-16px leading-normal mb-16px sm:text-18px sm:leading-normal">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:w-24px sm:h-24px" />
            <p>{{ $t('landingViewVP5.fifthBenefit') }}</p>
          </li>
          <li class="list-none flex items-center text-16px leading-normal mb-16px sm:text-18px sm:leading-normal">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:w-24px sm:h-24px" />
            <p>{{ $t('landingViewVP5.sixthBenefit') }}</p>
          </li>
          <li class="list-none flex items-center text-16px leading-normal mb-16px sm:text-18px sm:leading-normal">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:w-24px sm:h-24px" />
            <p v-html="$t('landingViewVP5.seventhBenefit')" />
          </li>
          <li class="list-none flex items-center text-16px leading-normal mb-16px sm:text-18px sm:leading-normal">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:w-24px sm:h-24px" />
            <p>{{ $t('landingViewVP5.eighthBenefit') }}</p>
          </li>
        </ul>
        <img src="@/assets/images/landing/baseline_v2/img_rating_3mil.png" alt="rating" class="mx-auto" />
      </div>
    </div>
  </div>
  <div class="w-full max-w-520px mx-auto">
    <h2 class="text-[#fff] font-display font-600 py-18px bg-body text-20px leading-normal text-center">
      {{$t('landingViewVP5_v2.musclesTitle')}}
    </h2>
    <div class="bg-body">
      <video-background
          :src="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.bodyVideo')}.mp4`)"
          :poster="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.bodyVideo')}.png`)"
          class="w-full h-310px sm:h-400px"
          objectFit="fill"
      />
    </div>
    <div class="bg-[#fff] p-32px relative top-[-35px] z-10 rounded-30px">
      <h2 class="text-34px leading-normal font-display font-600 text-body mb-16px text-center">{{$t('landingViewVP5_v2.trainingSystem.title')}}</h2>
      <p class="text-16px leading-normal text-center mb-32px">{{$t('landingViewVP5_v2.trainingSystem.description')}}</p>
      <video-background
          :src="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.trainingSystem.video')}.mp4`)"
          :poster="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.trainingSystem.video')}.png`)"
          class="w-full h-210px mb-32px max-w-311px mx-auto"
          objectFit="fill"
      />
      <ul class="flex flex-col gap-16px mb-48px">
        <li class="flex items-center">
          <img
              src="@/assets/images/svg/baseline_v2/icon_5min.svg"
              class="mr-24px"
          />
          <p
              class="text-[#111113CC] text-16px leading-normal"
              v-html="$t('landingViewVP5_v2.trainingSystem.benefits_1.b_1')"
          />
        </li>
        <li class="flex items-center">
          <img
              src="@/assets/images/svg/baseline_v2/icon_guide.svg"
              class="mr-24px"
          />
          <p
              class="text-[#111113CC] text-16px leading-normal"
              v-html="$t('landingViewVP5_v2.trainingSystem.benefits_1.b_2')"
          />
        </li>
        <li class="flex items-center">
          <img
              src="@/assets/images/svg/baseline_v2/icon_difficulty.svg"
              class="mr-24px"
          />
          <p
              class="text-[#111113CC] text-16px leading-normal"
              v-html="$t('landingViewVP5_v2.trainingSystem.benefits_1.b_3')"
          />
        </li>
        <li class="flex items-center">
          <img
              src="@/assets/images/svg/baseline_v2/icon_schedule.svg"
              class="mr-24px"
          />
          <p
              class="text-[#111113CC] text-16px leading-normal"
              v-html="$t('landingViewVP5_v2.trainingSystem.benefits_1.b_4')"
          />
        </li>
      </ul>
      <h2 class="font-display font-600 flex text-24px leading-snug redline mb-32px">
        {{$t('landingViewVP5_v2.trainingSystem.subtitle')}}
      </h2>
      <ul class="flex flex-col gap-16px">
        <li class="flex items-center">
          <img
              src="@/assets/images/svg/baseline_v2/icon_exercises.svg"
              class="mr-24px"
          />
          <p
              class="text-[#111113CC] text-16px leading-normal"
              v-html="$t('landingViewVP5_v2.trainingSystem.benefits_2.b_1')"
          />
        </li>
        <li class="flex items-center">
          <img
              src="@/assets/images/svg/baseline_v2/icon_therapist.svg"
              class="mr-24px"
          />
          <p
              class="text-[#111113CC] text-16px leading-normal"
              v-html="$t('landingViewVP5_v2.trainingSystem.benefits_2.b_2')"
          />
        </li>
        <li class="flex items-center">
          <img
              src="@/assets/images/svg/baseline_v2/icon_muscle.svg"
              class="mr-24px"
          />
          <p
              class="text-[#111113CC] text-16px leading-normal"
              v-html="$t('landingViewVP5_v2.trainingSystem.benefits_2.b_3')"
          />
        </li>
      </ul>
    </div>
    <div class="bg-body">
      <video-background
          :src="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.mindVideo')}.mp4`)"
          :poster="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.mindVideo')}.png`)"
          class="w-full h-310px sm:h-400px"
          objectFit="fill"
      />
    </div>
    <div class="bg-[#fff] p-32px pb-13px relative top-[-35px] z-10 rounded-30px">
      <h2 class="text-34px leading-normal font-display font-600 text-body mb-16px text-center">{{$t('landingViewVP5_v2.mindTraining.title')}}</h2>
      <p class="text-16px leading-normal text-center mb-32px">{{$t('landingViewVP5_v2.mindTraining.description')}}</p>
      <video-background
          :src="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.mindTraining.video')}.mp4`)"
          :poster="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.mindTraining.video')}.png`)"
          class="w-full h-210px max-w-311px mx-auto mb-32px"
          objectFit="fill"
      />
      <ul class="flex flex-col gap-16px mb-64px">
        <li class="flex justify-between items-center">
          <img
              src="@/assets/images/svg/baseline_v2/icon_certified.svg"
              class="mr-24px"
          />
          <p
              class="text-[#111113CC] text-16px leading-normal"
              v-html="$t('landingViewVP5_v2.mindTraining.benefits_1.b_1')"
          />
        </li>
        <li class="flex justify-between items-center">
          <img
              src="@/assets/images/svg/baseline_v2/icon_journey.svg"
              class="mr-24px"
          />
          <p
              class="text-[#111113CC] text-16px leading-normal"
              v-html="$t('landingViewVP5_v2.mindTraining.benefits_1.b_2')"
          />
        </li>
        <li class="flex justify-between items-center">
          <img
              src="@/assets/images/svg/baseline_v2/icon_insights.svg"
              class="mr-24px"
          />
          <p
              class="text-[#111113CC] text-16px leading-normal"
              v-html="$t('landingViewVP5_v2.mindTraining.benefits_1.b_3')"
          />
        </li>
        <li class="flex items-center">
          <img
              src="@/assets/images/svg/baseline_v2/icon_techniques.svg"
              class="mr-24px"
          />
          <p
              class="text-[#111113CC] text-16px leading-normal"
              v-html="$t('landingViewVP5_v2.mindTraining.benefits_1.b_4')"
          />
        </li>
      </ul>
      <h2 class="font-display font-600 flex text-24px leading-snug text-center mb-16px">
        {{$t('landingViewVP5_v2.mindTraining.allBenefits.title')}}
      </h2>
      <p
          v-html="$t('landingViewVP5_v2.mindTraining.allBenefits.description')"
          class="text-16px leading-normal text-center mb-32px"
      />
      <img :src="require(`@/assets/images/content/baseline_v2/${$t('landingViewVP5_v2.mindTraining.allBenefits.image')}`)" />
    </div>
    <div>
      <div class="bg-red py-24px px-32px mb-32px">
        <h2
            class="text-[#fff] text-28px font-display font-600 leading-snug text-center"
        >
          {{$t('landingViewVP5_v2.extraTools.title')}}
        </h2>
      </div>
      <ul class="flex flex-col px-32px">
        <li>
          <div class="flex items-center justify-center mb-16px">
            <img
                src="@/assets/images/svg/icon_check-red-bg.svg"
                class="mr-12px"
            />
            <h2 class="text-28px leading-snug font-display font-600">
              {{$t('landingViewVP5_v2.extraTools.tracker.title')}}
            </h2>
          </div>
          <p class="text-16px leading-normal text-center mb-24px">
            {{$t('landingViewVP5_v2.extraTools.tracker.description')}}
          </p>
          <video-background
              :src="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.extraTools.tracker.video')}.mp4`)"
              :poster="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.extraTools.tracker.video')}.png`)"
              class="w-full h-210px max-w-311px mx-auto"
              objectFit="fill"
          />
          <ul class="flex flex-col gap-16px mt-32px">
            <li class="flex items-center">
              <img
                  src="@/assets/images/svg/baseline_v2/icon_progress.svg"
                  class="mr-24px"
              />
              <p
                  class="text-[#111113CC] text-16px leading-normal"
                  v-html="$t('landingViewVP5_v2.extraTools.tracker.benefits_1.b_1')"
              />
            </li>
            <li class="flex items-center">
              <img
                  src="@/assets/images/svg/baseline_v2/icon_overviews.svg"
                  class="mr-24px"
              />
              <p
                  class="text-[#111113CC] text-16px leading-normal"
                  v-html="$t('landingViewVP5_v2.extraTools.tracker.benefits_1.b_2')"
              />
            </li>
            <li class="flex items-center">
              <img
                  src="@/assets/images/svg/baseline_v2/icon_motivation.svg"
                  class="mr-24px"
              />
              <p
                  class="text-[#111113CC] text-16px leading-normal"
                  v-html="$t('landingViewVP5_v2.extraTools.tracker.benefits_1.b_3')"
              />
            </li>
          </ul>
          <hr class="text-[#F1F3F9] mt-32px" />
        </li>
        <li class="mt-32px">
          <div class="flex items-center justify-center mb-16px">
            <img
                src="@/assets/images/svg/icon_check-red-bg.svg"
                class="mr-12px"
            />
            <h2 class="text-28px leading-snug font-display font-600">
              {{$t('landingViewVP5_v2.extraTools.challenges.title')}}
            </h2>
          </div>
          <p class="text-16px leading-normal text-center mb-24px">
            {{$t('landingViewVP5_v2.extraTools.challenges.description')}}
          </p>
          <video-background
              :src="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.extraTools.challenges.video')}.mp4`)"
              :poster="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.extraTools.challenges.video')}.png`)"
              class="w-full h-210px sm:h-305px"
              objectFit="fill"
          />
          <ul class="flex flex-col gap-16px mt-32px">
            <li class="flex items-center">
              <img
                  src="@/assets/images/svg/baseline_v2/icon_challenges.svg"
                  class="mr-24px"
              />
              <p
                  class="text-[#111113CC] text-16px leading-normal"
                  v-html="$t('landingViewVP5_v2.extraTools.challenges.benefits_1.b_1')"
              />
            </li>
            <li class="flex items-center">
              <img
                  src="@/assets/images/svg/baseline_v2/icon_daily_routine.svg"
                  class="mr-24px"
              />
              <p
                  class="text-[#111113CC] text-16px leading-normal"
                  v-html="$t('landingViewVP5_v2.extraTools.challenges.benefits_1.b_2')"
              />
            </li>
            <li class="flex items-center">
              <img
                  src="@/assets/images/svg/baseline_v2/icon_overall_health.svg"
                  class="mr-24px"
              />
              <p
                  class="text-[#111113CC] text-16px leading-normal"
                  v-html="$t('landingViewVP5_v2.extraTools.challenges.benefits_1.b_3')"
              />
            </li>
          </ul>
          <img
              :src="require(`@/assets/images/content/baseline_v2/${$t('landingViewVP5_v2.extraTools.challenges.image')}`)"
              class="mt-48px"
          />
          <hr class="text-[#F1F3F9] mt-32px" />
        </li>
        <li class="mt-32px">
          <div class="flex items-center justify-center mb-16px">
            <img
                src="@/assets/images/svg/icon_check-red-bg.svg"
                class="mr-12px"
            />
            <h2 class="text-28px leading-snug font-display font-600">
              {{$t('landingViewVP5_v2.extraTools.library.title')}}
            </h2>
          </div>
          <p class="text-16px leading-normal text-center mb-24px">
            {{$t('landingViewVP5_v2.extraTools.library.description')}}
          </p>
          <video-background
              :src="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.extraTools.library.video')}.mp4`)"
              :poster="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.extraTools.library.video')}.png`)"
              class="w-full h-210px sm:h-305px"
              objectFit="fill"
          />
          <ul class="flex flex-col gap-16px mt-32px">
            <li class="flex items-center">
              <img
                  src="@/assets/images/svg/baseline_v2/icon_illustrations.svg"
                  class="mr-24px"
              />
              <p
                  class="text-[#111113CC] text-16px leading-normal"
                  v-html="$t('landingViewVP5_v2.extraTools.library.benefits_1.b_1')"
              />
            </li>
            <li class="flex items-center">
              <img
                  src="@/assets/images/svg/baseline_v2/icon_certified.svg"
                  class="mr-24px"
              />
              <p
                  class="text-[#111113CC] text-16px leading-normal"
                  v-html="$t('landingViewVP5_v2.extraTools.library.benefits_1.b_2')"
              />
            </li>
            <li class="flex items-center">
              <img
                  src="@/assets/images/svg/baseline_v2/icon_trending.svg"
                  class="mr-24px"
              />
              <p
                  class="text-[#111113CC] text-16px leading-normal"
                  v-html="$t('landingViewVP5_v2.extraTools.library.benefits_1.b_3')"
              />
            </li>
          </ul>
          <hr class="text-[#F1F3F9] mt-32px" />
        </li>
        <li class="mt-32px">
          <div class="flex items-center justify-center mb-16px">
            <img
                src="@/assets/images/svg/icon_check-red-bg.svg"
                class="mr-12px"
            />
            <h2 class="text-28px leading-snug font-display font-600">
              {{$t('landingViewVP5_v2.extraTools.mindCleaner.title')}}
            </h2>
          </div>
          <p class="text-16px leading-normal text-center mb-24px">
            {{$t('landingViewVP5_v2.extraTools.mindCleaner.description')}}
          </p>
          <video-background
              :src="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.extraTools.mindCleaner.video')}.mp4`)"
              :poster="require(`@/assets/video/landing/baseline_v2/${$t('landingViewVP5_v2.extraTools.mindCleaner.video')}.png`)"
              class="w-full h-210px sm:h-305px"
              objectFit="fill"
          />
          <ul class="flex flex-col gap-16px mt-32px">
            <li class="flex items-center">
              <img
                  src="@/assets/images/svg/baseline_v2/icon_write.svg"
                  class="mr-24px"
              />
              <p
                  class="text-[#111113CC] text-16px leading-normal"
                  v-html="$t('landingViewVP5_v2.extraTools.mindCleaner.benefits_1.b_1')"
              />
            </li>
            <li class="flex items-center">
              <img
                  src="@/assets/images/svg/baseline_v2/icon_mind.svg"
                  class="mr-24px"
              />
              <p
                  class="text-[#111113CC] text-16px leading-normal"
                  v-html="$t('landingViewVP5_v2.extraTools.mindCleaner.benefits_1.b_2')"
              />
            </li>
            <li class="flex items-center">
              <img
                  src="@/assets/images/svg/baseline_v2/icon_overall_health.svg"
                  class="mr-24px"
              />
              <p
                  class="text-[#111113CC] text-16px leading-normal"
                  v-html="$t('landingViewVP5_v2.extraTools.mindCleaner.benefits_1.b_3')"
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <img
        src="@/assets/images/content/baseline_v2/icon_all_of_this.svg"
        class="mx-auto mt-48px"
    />
  </div>
  <div class="pt-32px max-w-520px mx-auto">
    <div class="px-32px">
      <h2 class="text-28px font-display font-600 leading-snug text-center mb-8px">
        {{$t('landingViewVP5_v2.mobileApp.title')}}
      </h2>
      <p
          v-html="$t('landingViewVP5_v2.mobileApp.description')"
          class="text-16px leading-normal text-center mb-32px"
      />
    </div>
    <img
        :src="require(`@/assets/images/content/baseline_v2/${$t('landingViewVP5_v2.mobileApp.image')}`)"
        class="mb-48px mx-auto"
    />
    <div class="px-16px">
      <div class="json-gradient py-32px px-24px rounded-15px">
        <h2 class="text-20px font-display font-600 leading-snug text-center">
          {{$t('landingViewVP5_v2.mobileApp.json_title')}}
        </h2>
      </div>
      <div class="mb-32px px-16px">
        <lottie-animation
            ref="graph"
            :autoPlay="false"
            :animationData="require(`@/assets/images/json/baseline_v2/${$t('landingViewVP5_v2.mobileApp.json')}.json`)"
        />
      </div>
      <p
          v-html="`<span>${$t('landingViewVP5_v2.mobileApp.text')}</span>`"
          class="redline flex text-16px leading-normal px-16px"
      />
    </div>
  </div>
  <div class="max-w-600px mx-auto relative pb-48px">
    <div class="flex flex-col my-16px mt-48px mx-auto mb-40px container-mob">
      <div
          class="font-display font-600 text-20px leading-snug mb-16px text-center font-600 sm:text-24px sm:leading-normal"
      >
        {{ $t('landingViewVP5_v2.reviews') }}
      </div>
      {{lengthReviews}}
      <template v-for="(item, key) in base" :key="key">
        <div
            v-show="key < this.numreview"
            class="p-15px rounded-9px mx-auto max-w-370px w-full bg-[#F9F9F9] duration-300 mb-8px sm:max-w-520px"
        >
          <div class="flex justify-between mb-15px">
            <div>
              <div class="text-14px leading-normal font-700 sm:text-18px sm:leading-normal">{{ $t(`review.${item.title}`)}}</div>
              <div class="flex mt-5px">
                <img v-for="i in item.rating" :key="i" src="@/assets/images/svg/icon_star.svg" alt="star-yellow" class="w-14px h-14px max-w-14px h-auto">
              </div>
            </div>

            <p class="font-500 text-12px leading-normal opacity-50 sm:text-16px sm:leading-normal">
              {{ item.name }}
            </p>
          </div>

          <p class="text-12px leading-normal font-400 sm:text-16px sm:leading-normal">
            {{ $t(`review.${item.text}`)}}
          </p>

        </div>
      </template>

      <base-button
          v-if="this.base.length > this.numreview"
          :label="$t(`landingViewVP5.button`)"
          class="mt-8px"
          @click="showReview"
          text-only
      />
    </div>
    <Guarantee class="max-w-311px mx-auto" />
  </div>
  <div id="selectPlan" class="px-16px pt-32px max-w-600px mx-auto bg-body sm:px-40px">
    <h2
        class="text-26px text-[#fff] font-display font-600 leading-snug mb-16px text-center"
        v-html="$t('landingViewVP5_v2.selectPlan.main_title')"
    />
    <h3 class="text-16px text-[#fff] font-500 leading-normal text-center mb-32px px-16px">
      {{$t('landingViewVP5_v2.selectPlan.subtitle')}}
    </h3>
    <img :src="require(`@/assets/images/content/baseline_v2/${$t('landingViewVP5_v2.selectPlan.image')}`)" class="mx-auto mb-48px" />
    <SuperDiscountGift
        v-if="superDiscount.theme"
        :discount="pickedTarifParams.discount"
        :discountOriginal="pickedTarifParams.discountOriginal"
        class="m-0 mx-auto mb-32px max-w-311px"
    />
    <div ref="payment-block" class="bg rounded-20px pt-32px pb-80px px-16px">
      <h2 class="text-28px text-[#fff] font-display font-600 leading-snug text-center mb-32px">
        {{ $t(`landingViewVP5_v2.selectPlan.title`)}}
      </h2>
      <div v-if="superDiscount.theme" class="flex flex-col max-w-430px mx-auto">
        <label
            v-for="({id, fullprice, cost, text, name, totalCost, superDiscPrice}, idx) of tarifs"
            :key="idx"
            class="relative flex justify-between p-8px pl-16px bg-[#fff] bg-opacity-5 rounded-9px mb-16px border-1px border-transparent cursor-pointer"
            :class="{'!border-1px !border-blue': subscribe === id}"
        >
          <div
              v-if="idx === 1"
              class="absolute top-[-50%] transform translate-y-[125%] left-20px bg-[#29292A] rounded-50px py-1px px-15px"
              :class="{'!bg-blue': subscribe === id}"
          >
            <p
                class="text-12px font-700 leading-normal text-[#fff] opacity-50"
                :class="{'!opacity-100': subscribe === id}"
            >
              MOST POPULAR
            </p>
          </div>
          <div class="flex items-center">
            <div>
              <input
                  class="appearance-none absolute"
                  type="radio"
                  name="subscribe"
                  :value="id"
                  v-model="subscribe"
              />
              <span
                  class="relative block w-20px h-20px rounded-full border-2px border-[#ffffff26] mr-16px"
                  :class="{'!bg-blue !border-none': subscribe === id}"
              >
                <img
                    v-if="subscribe === id"
                    src="@/assets/images/svg/icon_check-no-bg-black.svg"
                    class="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                />
              </span>
            </div>
            <div>
              <p
                  class="font-display font-600 leading-normal text-[#fff] opacity-50"
                  :class="{ '!opacity-100' : subscribe === id }"
              >
                {{$t(`landingViewVP5.tarifs.${name}`)}}
              </p>
              <p
                  class="text-10px leading-normal text-[#fff] opacity-25"
                  :class="{ '!opacity-75' : subscribe === id }"
              >
                <span class="line-through">{{totalCost}}</span>
                {{superDiscPrice}}
              </p>
            </div>
          </div>
          <div class="relative">
            <div :class="[subscribe === id ? 'opacity-100' : 'opacity-5']">
              <svg width="112" height="56" viewBox="0 0 112 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5604 2.5193C15.4506 0.96143 17.1073 0 18.9016 0H107C109.761 0 112 2.23858 112 5V51C112 53.7614 109.761 56 107 56H18.9016C17.1073 56 15.4506 55.0386 14.5604 53.4807L1.41754 30.4807C0.53916 28.9435 0.539161 27.0565 1.41754 25.5193L14.5604 2.5193Z" :fill="subscribe === id ? '#5773D6' : '#fff'" />
              </svg>
            </div>
            <div class="absolute flex flex-col items-center gap-2px w-full top-[50%] left-[50%] transform translate-x-[-45%] translate-y-[-50%]">
              <p
                  class="font-600 text-12px leading-tight text-[#fff] opacity-25 line-through"
                  :class="{ '!text-body !opacity-100' : subscribe === id }"
              >
                {{fullprice}}
              </p>
              <p
                  class="font-700 text-16px leading-none text-center text-blue opacity-50"
                  :class="{ '!text-[#fff] !opacity-100' : subscribe === id }"
              >
                {{cost}}
              </p>
              <p
                  class="font-600 text-12px leading-none text-center text-[#fff] opacity-50"
                  :class="{ '!opacity-100' : subscribe === id }"
              >
                {{$t(`landingViewVP5.tarifs.txt`)}}
              </p>
            </div>
          </div>
        </label>
      </div>
      <div v-else class="flex flex-col max-w-430px mx-auto">
        <label
            v-for="({id, fullprice, cost, text, name, totalCost, totalDiscCost}, idx) of tarifs"
            :key="idx"
            class="relative flex justify-between p-8px pl-16px bg-[#fff] bg-opacity-5 rounded-9px mb-16px border-1px border-transparent cursor-pointer"
            :class="{'!border-1px !border-red': subscribe === id}"
        >
          <div
              v-if="idx === 1"
              class="absolute top-[-50%] transform translate-y-[125%] left-20px bg-[#29292A] rounded-50px py-1px px-15px"
              :class="{'!bg-red': subscribe === id}"
          >
            <p
                class="text-12px font-700 leading-normal text-[#fff] opacity-50"
                :class="{'!opacity-100': subscribe === id}"
            >
              MOST POPULAR
            </p>
          </div>
          <div class="flex items-center">
            <div>
              <input
                  class="appearance-none absolute"
                  type="radio"
                  name="subscribe"
                  :value="id"
                  v-model="subscribe"
              />
              <span
                  class="relative block w-20px h-20px rounded-full border-2px border-[#ffffff26] mr-16px"
                  :class="{'!bg-red !border-none': subscribe === id}"
              >
                <img
                    v-if="subscribe === id"
                    src="@/assets/images/svg/icon_check-no-bg-black.svg"
                    class="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                />
              </span>
            </div>
            <div>
              <p
                  class="font-display font-600 leading-normal text-[#fff] opacity-50"
                  :class="{ '!opacity-100' : subscribe === id }"
              >
                {{$t(`landingViewVP5_v2.selectPlan.tarifs.${name}`)}}
              </p>
              <p
                  class="text-10px leading-normal text-[#fff] opacity-25"
                  :class="{ '!opacity-75' : subscribe === id }"
              >
                <span class="line-through">{{totalCost}}</span>
                {{totalDiscCost}}
              </p>
            </div>
          </div>
          <div class="relative">
            <div :class="[subscribe === id ? 'opacity-100' : 'opacity-5']">
              <svg width="112" height="56" viewBox="0 0 112 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5604 2.5193C15.4506 0.96143 17.1073 0 18.9016 0H107C109.761 0 112 2.23858 112 5V51C112 53.7614 109.761 56 107 56H18.9016C17.1073 56 15.4506 55.0386 14.5604 53.4807L1.41754 30.4807C0.53916 28.9435 0.539161 27.0565 1.41754 25.5193L14.5604 2.5193Z" :fill="subscribe === id ? '#E44240' : '#fff'" />
              </svg>
            </div>
            <div class="absolute flex flex-col items-center gap-2px w-full top-[50%] left-[50%] transform translate-x-[-45%] translate-y-[-50%]">
              <p
                  class="font-600 text-12px leading-tight text-[#fff] opacity-25 line-through"
                  :class="{ '!text-body !opacity-100' : subscribe === id }"
              >
                {{fullprice}}
              </p>
              <p
                  class="font-700 text-16px leading-none text-center text-red opacity-50"
                  :class="{ '!text-[#fff] !opacity-100' : subscribe === id }"
              >
                {{cost}}
              </p>
              <p
                  class="font-600 text-12px leading-none text-center text-[#fff] opacity-50"
                  :class="{ '!opacity-100' : subscribe === id }"
              >
                {{$t(`landingViewVP5_v2.selectPlan.tarifs.txt`)}}
              </p>
            </div>
          </div>
        </label>
      </div>
      <p
          v-if="pickedTarifParams.discountType === 1"
          class="p-16px my-32px mx-0 font-400 text-12px leading-normal text-[#fff] opacity-50 border-2px border-[#FFFFFF3F] rounded-9px"
          v-html="$t('landingViewVP5_v2.selectPlan.agree_1', {discPrice: pickedTarifParams.discountPrice, subscrPeriod: pickedTarifParams.subscriptionPeriod})"
      />
      <p
          v-else
          class="p-16px my-32px mx-0 font-400 text-12px leading-normal text-[#fff] opacity-50 border-2px border-[#FFFFFF3F] rounded-9px"
          v-html="$t('landingViewVP5_v2.selectPlan.agree_2', {discPrice: pickedTarifParams.discountPrice, subscrPeriod: pickedTarifParams.subscriptionPeriod, fullprice: pickedTarifParams.fullPrice})"
      />
      <base-button
          :label="$t(`landingViewVP5_v2.selectPlan.continue`)"
          :theme="colorTheme"
          :disabled="!subscribe"
          @click="openPaymentPopup"
      />
    </div>
  </div>
  <div class="py-48px px-32px max-w-600px mx-auto">
    <FaqBlock :items="faqQuestions.faq" />
    <div class="mt-48px">
      <div class="mb-24px">
        <div class="flex items-center mb-12px">
          <img src="@/assets/images/svg/icon_safe.svg" class="mr-8px" />
          <h3 class="text-16px font-display font-600 leading-snug">
            {{$t(`landingViewVP5_v2.safe`)}}
          </h3>
        </div>
        <p class="text-14px font-400 leading-normal">
          {{$t(`landingViewVP5_v2.info`)}}
        </p>
      </div>
      <div class="mb-24px">
        <div class="flex items-center mb-12px">
          <img src="@/assets/images/svg/icon_secure.svg" class="mr-8px" />
          <h3 class="text-16px font-display font-600 leading-snug">
            {{$t(`landingViewVP5_v2.secure`)}}
          </h3>
        </div>
        <p class="text-14px font-400 leading-normal">
          {{$t(`landingViewVP5_v2.encrypted`)}}
        </p>
      </div>
      <div >
        <div class="flex items-center mb-12px">
          <img src="@/assets/images/svg/icon_help.svg" class="mr-8px" />
          <h3 class="text-16px font-display font-600 leading-snug">
            {{$t(`landingViewVP5_v2.help`)}}
          </h3>
        </div>
        <p
            class="text-14px font-400 leading-normal"
            v-html="$t('landingViewVP5.contact', {email: 'contact@kegel-plan.com'})"
        />
      </div>
      <a @click="scrollToPaymentBlock" class="bg-red rounded-9px py-20px px-0 w-full mx-auto mt-48px mb-0 font-700 text-18px leading-tight text-center text-[#fff] border-none block no-underline cursor-pointer shadow-button-red">
        {{$t(`landingViewVP5_v2.getPlanButton`)}}
      </a>
    </div>
  </div>
  <Footer />
  <vpopup
      v-if="paymentPopup"
      textTitle="Select Payment method"
      position="bottom"
      @closePopup="cancelPayment"
      close-button
  >
    <PaymentFormCompanentModal
        @error="paymentError"
        @success="nextUrl"
        @clickButton="closeWindowError"
        :item="this.item"
        :auth_price="this.price"
        :discount="pickedTarifParams.discount"
        :discountAmount="pickedTarifParams.discountAmount"
        :discountPrice="pickedTarifParams.discountPrice"
        :fullPrice="pickedTarifParams.fullPrice"
        :subscription="pickedTarifParams.subscriptionName"
        :subscriptionDate="pickedTarifParams.subscriptionPeriod"
        :theme="superDiscount.theme"
        id="paymentForm" />
  </vpopup>
  <vpopup
      v-if="windowError"
      error
      :close-button="false"
  >
    <div class="flex items-center">
      <p class="opacity-75 font-500 text-red text-14px leading-normal">
        {{$t(`landingViewVP5.declined`)}}
      </p>
      <img
          class="ml-16px cursor-pointer"
          src="@/assets/images/svg/icon_btn-close-communicate.svg"
          alt="error"
          @click="closeWindowError"
      >
    </div>
  </vpopup>
  <SuperDiscountWindow
      v-if="superDiscount.popup && !superWindowWasOpened"
      :goal="$t(`home.tracks.purpose.${purpose}`)"
      @close="closeSuperDiscountPopup"
  />
</template>
  <script>
  import { mapGetters } from 'vuex';
  import vpopup from '@/components/modal/v-popup.vue';
  import faqQuestions from "@/constants/landingV3";
  import countdown from '@/components/Countdown.vue';
  import SuperDiscountWindow from '@/components/SuperDiscountWindow.vue';
  import SuperDiscountGift from '@/components/SuperDiscountGift.vue';
  import Guarantee from '@/components/baseline_v2/Guarantee.vue';
  import FaqBlock from '@/components/baseline_v2/FaqBlock.vue';
  import Footer from '@/components/Footer.vue';
  import PaymentFormCompanentModal from '@/components/PaymentFormCompanentModal.vue';
  import '@/assets/css/animations.css'
  import BaseButton from "@/components/ui/BaseButton.vue";

  export default {
    name: 'LandingView',
    inject: ['mixpanel'],
    components: {
      BaseButton,
      vpopup,
      countdown,
      PaymentFormCompanentModal,
      SuperDiscountWindow,
      SuperDiscountGift,
      Guarantee,
      FaqBlock,
      Footer,
  },
    data() {
      return {
        item: localStorage.getItem('LandingItem'),
        superDiscount: {
          popup: false,
          theme: false,
        },
        superDiscWindow: localStorage.getItem('superDiscWindow'),
        subscribe: 2,
        apple_pay: true,
        paymentPopup: false,
        faqQuestions,
        timerRestarter: false,
        blockFixed: false,
        base: {},
        numreview: 3,
        track: 0,
        windowError: false,
        numTimeError:0,
        polling: null,
        price: localStorage.getItem('price'),
        numanimate: 1,
        superWindowWasOpened: localStorage.getItem('superDiscWindow'),
        show: false,
        AddPurposeCom: sessionStorage.getItem('resbtn') === 'Yes',
        addItem: false,
        numanim: null,
      };
    },
    beforeRouteLeave(to, from, next) {
      if (this.paymentPopup) {
        this.cancelPayment()
        return false
      } else {
        next()
      }
    },
    methods: {
      scrollToPaymentBlock() {
        const el = this.$refs["payment-block"];
        const y = el.getBoundingClientRect().top + window.pageYOffset - 50;

        window.scrollTo({top: y, behavior: 'smooth'});
      },
      scrollBorder() {
        if (window.scrollY > this.tarifBlockPosition) {
          this.blockFixed = true
        }
        if (window.scrollY > this.lottieGraphPosition) {
          this.$refs['graph'].play()
        }
      },
      superDiscountCheck() {
        const superDiscount = JSON.parse(localStorage.getItem('superDiscount'))
        this.superDiscount.theme = superDiscount ? superDiscount : false;
        if (this.superDiscount.theme) {
          this.superDiscount.popup = true
        }
      },
      setDate(index) {
        return this.$dayjs().add(index,'month').format("MMM")
      },
      closeSuperDiscountPopup() {
        this.superDiscount.popup = false;
        localStorage.setItem('superDiscWindow', true)
        const tarifSelectorElem = document.getElementById('selectPlan');
        tarifSelectorElem.scrollIntoView()
        document.body.style.overflow = 'unset'
        this.subscribe = 2;
      },
      openPaymentPopup() {
        this.paymentPopup = true;
        document.body.style.overflow = 'hidden'
        localStorage.setItem('superDiscount', true)
        const pickedSubscription = {
          id: this.pickedTarifParams.discountType,
          name: this.pickedTarifParams.subscriptionPeriod,
          superDiscount: this.pickedTarifParams.superDiscount,
          period: this.pickedTarifParams.subscriptionPeriod,
          fullPrice: this.pickedTarifParams.fullPrice
        }
        this.$store.commit('SET_SUBSCRIPTION', pickedSubscription)
        localStorage.setItem('usersSubscriptionInfo', JSON.stringify(pickedSubscription))
      },
      cancelPayment() {
        if (!this.superDiscount.theme) {
          this.timerRestarter = true
        }
        this.paymentPopup = false;
        document.body.style.overflow = 'auto'
        if (!this.superDiscount.theme) {
          this.superDiscount.popup = true;
          this.superDiscount.theme = true;
          document.body.style.overflow = 'hidden'
        }
      },
      nextUrl() {
        this.mixpanel.track('Trial Started',{
          amount: this.price
        })
        this.paymentPopup = false
        document.body.style.overflow = 'unset'
        this.localStorage.setItem("LandingItem", this.item)
      },
      paymentError() {
        this.mixpanel.track('Payment Error', {
          stage: "Trial"
        })
        console.log(this.numTimeError);
        this.windowError = true;
        this.numTimeError = 0;
        this.polling = setInterval(() => {
          if (this.numTimeError < 9) {
            console.log(this.numTimeError);
            this.numTimeError += 1;
          } else {
            console.log(this.numTimeError);
            clearInterval(this.polling);
            this.numTimeError = 0;
            this.windowError = false;
          }
        }, 10000);
      },
      closeWindowError(e) {
        clearInterval(this.polling);
        this.windowError = false;
      },
      showReview() {
        this.numreview = this.numreview + 2;
        console.log(this.base.length);
      },
    },
    computed: {
      tarifs() {
        return [
          {
            id: 1,
            name: 'name_1',
            fullprice: '1.50 USD',
            cost: this.superDiscount.theme ? '0.79 USD' : '0.99 USD',
            text: 'txt',
            totalCost: '10.49 USD',
            totalDiscCost: '6.93 USD',
            superDiscPrice: '5.50 USD',
            chargebeeId: this.superDiscount.theme ? "kegel-4-trial-USD-Monthly" : "kegel_1_trial-USD-Monthly"
          },
          {
            id: 2,
            name: 'name_2',
            fullprice: '1.00 USD',
            cost: this.superDiscount.theme ? '0.39 USD' : '0.49 USD',
            text: 'txt',
            totalCost: '30.99 USD',
            totalDiscCost: '15.19 USD',
            superDiscPrice: '11.99 USD',
            chargebeeId: this.superDiscount.theme ? "kegel-5-trial-USD-Monthly" : "kegel-2-trial-USD-Monthly"
          },
          {
            id: 3,
            name: 'name_3',
            fullprice: '0.59 USD',
            cost: this.superDiscount.theme ? '0.24 USD' : '0.29 USD',
            text: 'txt',
            totalCost: '53.19 USD',
            totalDiscCost: '25.99 USD',
            superDiscPrice: '21.49 USD',
            chargebeeId: this.superDiscount.theme ? "kegel-6-trial-USD-Every-3-months" : "kegel-3-trial-USD-Every-3-months"
          }
        ]
      },
      colorTheme() {
        return this.superDiscount.theme ? 'blue' : 'red'
      },
      pickedTarifParams() {
        const priceParams = {
          subscriptionPeriod: '',
          fullPrice: '',
          discountPrice: '',
          discountAmount: '',
          subscriptionName: '',
          discount: null,
          discountOriginal: null,
          superDiscount: this.superDiscount.theme ? true : false,
          discountType: this.subscribe
        };
        switch (priceParams.discountType) {
          case 1:
            priceParams.subscriptionPeriod = '1 week'
            priceParams.fullPrice = '10.49 USD'
            priceParams.discountPrice = this.superDiscount.theme ? '5.50 USD' : '6.93 USD'
            priceParams.discountAmount = this.superDiscount.theme ? '4.99 USD' : '3.56 USD'
            priceParams.subscriptionName = '1-week  Kegel Plan'
            priceParams.discount = this.superDiscount.theme ? 48 : 34
            priceParams.discountOriginal = 34
            priceParams.chargebeeId = this.superDiscount.theme ? "kegel-4-trial-USD-Monthly" : "kegel_1_trial-USD-Monthly"
            this.price = this.superDiscount.theme ? 5.50 : 6.93
            this.item = priceParams.chargebeeId
            break;
          case 2:
            priceParams.subscriptionPeriod = '1 month'
            priceParams.fullPrice = '30.99 USD'
            priceParams.discountPrice = this.superDiscount.theme ? '11.99 USD' : '15.19 USD'
            priceParams.discountAmount = this.superDiscount.theme ? '19.00 USD' : '15.80 USD'
            priceParams.subscriptionName = '1-month  Kegel Plan'
            priceParams.discount = this.superDiscount.theme ? 61 : 51
            priceParams.discountOriginal = 51
            priceParams.chargebeeId = this.superDiscount.theme ? "kegel-5-trial-USD-Monthly" : "kegel-2-trial-USD-Monthly"
            this.price = this.superDiscount.theme ? 11.99 : 15.19
            this.item = priceParams.chargebeeId
            break;
          case 3:
            priceParams.subscriptionPeriod = '3 months'
            priceParams.fullPrice = '53.19 USD'
            priceParams.discountPrice = this.superDiscount.theme ? '21.49 USD' : '25.99 USD'
            priceParams.discountAmount = this.superDiscount.theme ? '31.70 USD' : '27.20 USD'
            priceParams.subscriptionName = '3-months  Kegel Plan'
            priceParams.discount = this.superDiscount.theme ? 60 : 51
            priceParams.discountOriginal = 51
            priceParams.chargebeeId = this.superDiscount.theme ? "kegel-6-trial-USD-Every-3-months" : "kegel-3-trial-USD-Every-3-months"
            this.price = this.superDiscount.theme ? 21.49 : 25.99
            this.item = priceParams.chargebeeId
            break;
        }
        return priceParams;
      },
      purpose(){
        var json = localStorage.getItem('track');
        var obj = JSON.parse(json);
        return obj.purpose;
      },
      addpurpose(){
        var json = localStorage.getItem('track');
        var obj = JSON.parse(json);
        console.log(obj.addpurpose);
        return obj.addpurpose;

      },
      lengthReviews(){
        var json = localStorage.getItem('track');
        var obj = JSON.parse(json);
        this.track = obj.id
        if(this.track == 3){
          this.addItem = true
          this.base =  this.$store.state.review.msgOkLand
          this.AddPurposeCom = false
        }else if(this.track == 2){
          this.base = this.$store.state.review.msgPeLand
        }else{
          this.base = this.$store.state.review.msgEdLand
        }
        return console.log(this.track);  ;
      },
      tarifBlockPosition() {
        return this.$refs['payment-block'].getBoundingClientRect().y - window.innerHeight
      },
      lottieGraphPosition() {
        return this.$refs['graph'].$el.getBoundingClientRect().y - window.innerHeight
      }
    },
    beforeUnmount () {
      document.removeEventListener('scroll', this.scrollBorder)
      clearInterval(this.polling)
      clearInterval(this.numanim)
    },
    mounted() {
      document.addEventListener('scroll', this.scrollBorder)
      console.log()
      this.superDiscountCheck()
      this.apple_pay = true;
      this.numanim = setInterval(() => {
        if (this.numanimate == 1) {
          this.dataPP3 = sessionStorage.getItem('data34')
          this.numanimate += 1
          this.show = true;
        }else if(this.numanimate == 2){
          this.numanimate += 1
          this.show = false;
          this.dataPP3 = sessionStorage.getItem('data33')
        }else if(this.numanimate == 3){
          this.numanimate += 1
          this.show = true;
        }else if(this.numanimate == 4){
          this.numanimate += 1
          this.show = false;
          this.dataPP3 = sessionStorage.getItem('data32')
        }else if(this.numanimate == 5){
          this.numanimate += 1
          this.show = true;
        }else if(this.numanimate == 6){
          this.numanimate += 1
          this.show = false;
          this.dataPP3 = sessionStorage.getItem('data3')
        }else if(this.numanimate == 7){
          this.numanimate += 1
          this.show = true;
        }else{
          clearInterval(this.numanim);
        }
      }, 500);
    },
    created () {
      this.mixpanel.track('Landing Page 1 Shown')
    },
  };
  </script>

<style scoped>
.redline::before {
  content: "";
  display: block;
  min-width: 4px;
  min-height: 100%;
  background: #E44240;
  border-radius: 10px;
  margin-right: 16px;
}

.json-gradient {
  background: rgb(241,243,249);
  background: linear-gradient(180deg, rgba(241,243,249,1) 0%, rgba(255,255,255,1) 100%);
}

.bg {
  background: linear-gradient(180deg, rgba(33, 33, 33, 0.70) 0%, #111113 100%);
}
</style>
