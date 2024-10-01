<template>
  <div>
    <div class="home">
      <Jumbotron />

      <!--<VideoCustom />-->

      <Contact />
      
      <div class="home__section">
        <div class="home__sectionarea">
          <figure class="home__sectionarea--figure first">
            <img src="@/assets/imgs/corporate.jpeg"/>
          </figure>
          <div class="home__sectionarea--text">
            <h5 class="home__sectionarea--h5 section-sub">about us</h5>
            <h3 class="section-h3">Harfinlaw Firm</h3>

            <p class="home__sectionarea--para section-sub">is an international well recognized award winning law firm, specialized in international money recovering litigation. We operate across the globe, with a diverse team of 40 professionals, that will provide businesses and individuals with an effective expert resourceful advice and practical legal solutions. We pride ourselves to be a law firm with a vision, and defining</p>
            <p class="section-sub">success with our clients.</p>
            <button @click="$router.push(`/ourcompany`)">learn more</button>
          </div>
        </div>
        <div class="home__sectionarea">
          <div class="home__sectionarea--text">
            <h5 class="home__sectionarea--h5 section-sub">our mission</h5>
            <h3 class="section-h3">Harfinlaw Firm</h3>

            <p class="home__sectionarea--para section-sub">Is a dynamic, independent and multilingual law firm based in Harfinlaw Firm clients choose to work with us because in today’s increasingly complex business environment, we deliver pragmatic, innovative and effective solutions, with the</p>
            <p class="section-sub">standard of professional integrity.</p>
            <button @click="$router.push(`/ourmission`)">learn more</button>
          </div>

          <figure class="home__sectionarea--figure second">
            <img src="@/assets/imgs/team.jpeg"/>
          </figure>
        </div>
      </div>

      <LawyersGrid />

      <OurExpertise />
      
      <Brands :label="'our partners'"/>

      <div class="home__casessection">
        <h3 class="section-h3">types of cases</h3>
        <div class="home__cases">
          <div class="home__case">
            <figure class="home__case--figure">
              <img src="@/assets/imgs/images-4-770x513.jpeg"/>
            </figure>
            <div class="home__case--bottom">
              <h5>FUNDS MIS-APPROPRIATION</h5>
              <p>It is an illegal use of another person’s property or funds for personal gain or for...</p>
              <span @click="$router.push(`/missappropriation`)">Read more</span>
            </div>
          </div>
          
          <div class="home__case">
            <figure class="home__case--figure">
              <img src="@/assets/imgs/a-4-ritgz4vquwk-770x513.jpeg"/>
            </figure>
            <div class="home__case--bottom">
              <h5>FINANCIAL CRIMES</h5>
              <p>It relates to nonviolent action that includes a wide range of anti-legal activities such..</p>
              <span @click="$router.push(`/financialcrimes`)">Read more</span>
            </div>
          </div>

          <div class="home__case">
            <figure class="home__case--figure">
              <img src="@/assets/imgs/a-1-9socnyqmkzi-770x513.jpeg"/>
            </figure>
            <div class="home__case--bottom">
              <h5>FRAUDS</h5>
              <p>Fraud is considered an intentional deception to gain unfair or unlawful profit...</p>
              <span @click="$router.push(`/fraud`)">Read more</span>
            </div>
          </div>

          <div class="home__case">
            <figure class="home__case--figure">
              <img src="@/assets/imgs/a-2-osc-rqgb-ws-1920x1280.jpeg"/>
            </figure>
            <div class="home__case--bottom">
              <h5>NEGLECT OF DUTIES</h5>
              <p>It is the breach of the obligations and failures in compliance with a contract or a service.</p>
              <span @click="$router.push(`/neglectofduty`)">Read more</span>
            </div>
          </div>

          <div class="home__case">
            <figure class="home__case--figure">
              <img src="@/assets/imgs/a-3-swip4ym43fs-1920x1280.jpeg"/>
            </figure>
            <div class="home__case--bottom">
              <h5>CYBER-CRIME</h5>
              <p>It refers to crimes against computers and information systems, where the main aim is.</p>
              <span @click="$router.push(`/cybercrime`)">Read more</span>
            </div>
          </div>
        </div>
      </div>

      <Brands :label="'awards'"/>

      <div class="home__stats">
        <section class="home__stats--left"> 
          <figure>
            <img src="@/assets/imgs/images-5-800x529.jpeg"/>
          </figure>
        </section>

        <section class="home__stats--right">
          <p class="home__stats--para section-sub">Here at Harfinlaw Firm we scout out talented lawyers, with a study background across Europe, America and Asia. We believe that the quality of our lawyers reflects our overall performance.</p>

          <div class="home__stats--numbers">
            <div class="home__stats--stat">
              <p>7,654</p>
              <p>SOLVED CASES</p>
            </div>
            <div class="home__stats--stat">
              <p>34</p>
              <p>PARTERS</p>
            </div>
            <div class="home__stats--stat">
              <p>40</p>
              <p>STAFF MEMBERS</p>
            </div>

            <!--<button class="home__stats--btn">learn more</button>-->
          </div>
        </section>
      </div>
      <Slide />
      
      <Brands :label="'trusted by'"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
        #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.home {

  &__section {
    color: var(--white);
    background: var(--sectionbackground);
    padding: #{scaleValue(150)} 0;

    @media only screen and (max-width: 414px) { 
      padding: #{scaleValue(250)} 0;
    }
  }

  &__sectionarea {
    display: flex;
    justify-content: space-between;

    &:nth-child(1) {
      padding: 0 #{scaleValue(160)};
      margin-bottom: #{scaleValue(140)};

      @media only screen and (max-width: 414px) { 
        flex-direction: column;
        @include headerpadding;
        margin-bottom: #{scaleValue(230)};
      }
    }

    &:nth-child(2) {
      padding: 0 #{scaleValue(50)} 0 #{scaleValue(120)};

      @media only screen and (max-width: 414px) { 
        flex-direction: column-reverse;
        @include headerpadding;
      }
    }

    & h3 {
      text-align: left;
    }

    &--h5 {
      color: var(--maingold);
      text-transform: uppercase;
      margin-bottom: #{scaleValue(10)};
    }

    &--figure {

      &.first {
        width: #{scaleValue(600)};
        height: #{scaleValue(400)}; 

        @media only screen and (max-width: 414px) { 
          width: 100%;
          height: #{scaleValue(800)};
          margin-bottom: #{scaleValue(200)};
        }
      }

      &.second {
        width: #{scaleValue(800)};
        height: #{scaleValue(500)};

        @media only screen and (max-width: 414px) { 
          width: 100%;
          height: #{scaleValue(800)}; 
          margin-bottom: #{scaleValue(200)};
        }
      }

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &--text {
      width: #{scaleValue(600)};

      @media only screen and (max-width: 414px) { 
        width: 100%;
      }

      & p {
        margin-bottom: #{scaleValue(20)};
      }

      & button {
        @include btnmain(#{scaleValue(100)});
        margin-top: #{scaleValue(20)};

        @media only screen and (max-width: 414px) { 
          margin-top: #{scaleValue(240)};
        }
      }
    }
  }

  &__casessection {
    padding: #{scaleValue(80)} 0;
  }

  &__cases {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(#{scaleValue(300)}, 1fr));
    grid-gap: #{scaleValue(30)};
    align-items: start;

    padding: 0 #{scaleValue(160)};

    @media only screen and (max-width: 414px) { 
      display: flex;
      flex-direction: column;
    }
  }

  &__case {
    min-height: 30rem;
    border-radius: .3rem;
    background: var(--cardbackground);
    overflow: hidden;

    @media only screen and (max-width: 414px) { 
        width: 100%;
    }

    &--figure {
      height: #{scaleValue(250)};

      @media only screen and (max-width: 414px) { 
        height: #{scaleValue(800)};
      }

      & img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }

    &--bottom {
      padding: #{scaleValue(30)};
      font-size: #{scaleValue(17)};
      padding-bottom: #{scaleValue(70)};

      @media only screen and (max-width: 414px) { 
          font-size: #{scaleValue(70)};
      }

      & h5 {
        font-size: #{scaleValue(18)};
        margin-bottom: #{scaleValue(18)};
        margin-top: #{scaleValue(10)};

        @media only screen and (max-width: 414px) { 
          font-size: #{scaleValue(80)};
          margin-top: #{scaleValue(90)};
        }
      }

      & p {
        line-height: #{scaleValue(27)};

        @media only screen and (max-width: 414px) { 
          line-height: #{scaleValue(90)};
          margin: #{scaleValue(90)} 0;
        }
      }

      & span {
        color: var(--maingold);
        display: inline-block;
        margin-top: #{scaleValue(30)};
        font-size: #{scaleValue(17)};
        cursor: pointer;

        @media only screen and (max-width: 414px) { 
          font-size: #{scaleValue(80)};
        }
      }
    }
  }

  &__stats {
    color: var(--white);
    background: var(--sectionbackground);
    padding: #{scaleValue(150)} #{scaleValue(160)};
    display: flex;

    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 414px) { 
       flex-direction: column;
       padding-top: #{scaleValue(300)};
       padding-bottom: #{scaleValue(300)};
    }

    &--left {

      @media only screen and (max-width: 414px) {
        width: 100%;
      }

      & figure {
        height: #{scaleValue(450)};
        width: #{scaleValue(700)};

        @media only screen and (max-width: 414px) { 
          height: #{scaleValue(900)};
          width: 100%;
          margin-bottom: #{scaleValue(150)};
        }

        & img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }
    }

    &--right {
      width: #{scaleValue(530)};

      @media only screen and (max-width: 414px) {
        width: 100%;
      }
    }

    &--para {
      @media only screen and (max-width: 414px) {
       margin-bottom: #{scaleValue(150)};
      }
    }

    &--numbers {
      margin-top: #{scaleValue(60)};
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &--stat {
      text-align: center;
      margin-bottom: #{scaleValue(50)};
      line-height: #{scaleValue(50)};

      @media only screen and (max-width: 414px) {
         line-height: #{scaleValue(160)};
         margin-bottom: #{scaleValue(200)};
      }

      & p {

        &:nth-child(1) {
          font-size: #{scaleValue(38)};
          letter-spacing: #{scaleValue(3)};
          font-weight: 800;

          @media only screen and (max-width: 414px) {
            font-size: #{scaleValue(100)};
          }
        }

        &:nth-child(2) {
          font-size: #{scaleValue(26)};

          @media only screen and (max-width: 414px) {
            font-size: #{scaleValue(80)};
          }
        }
      }
    }

    &--btnarea {
      margin: 0 auto;
      background: blue;
    }

    &--btn {
      @include btnmain(#{scaleValue(100)});
    }
  }
}
</style>
