<template>
  <div class="ourexpertise">
    <div class="ourexpertise__body">
        <section class="ourexpertise__mase">
            <figure>
                <img src="@/assets/imgs/mase.jpeg"/>
            </figure>
        </section>

        <section class="ourexpertise__middle">
            <h3 class="section-h3">our expertise</h3>
            <h5 class="section-sub">WE KNOW THE LAW AND HAVE THE PRACTICAL EXPERIENCE</h5>
        </section>

        <section class="ourexpertise__btn">
            <button @click="$router.push('/expertise')">learn more</button>
        </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
        #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}
.ourexpertise {
    background: var(--cardbackground);
    padding: #{scaleValue(100)} #{scaleValue(50)};

    &__body {
        background: var(--white);
        display: flex;
        align-items: center;

        border-radius: .3rem;

        @media only screen and (max-width: 414px) { 
          flex-direction: column;
          align-items: flex-start;
        }
    }

    &__mase {
        height: #{scaleValue(260)};

        @media only screen and (max-width: 414px) { 
           height: #{scaleValue(900)};
           width: 100%;
        }

        & figure {
            height: 100%;
            width: #{scaleValue(410)};

            @media only screen and (max-width: 414px) { 
              width: 100%
            }

            & img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }
    }

    &__middle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: #{scaleValue(900)};
        padding: 0 #{scaleValue(100)};
        line-height: #{scaleValue(65)};

        @media only screen and (max-width: 414px) { 
           padding: #{scaleValue(100)} 0;
            width: 100%;
        }

        & h3 {
            margin: 0;
            text-align: left;
        }

        & h5 {
            font-weight: 400;
            font-size: #{scaleValue(19)};

            @media only screen and (max-width: 414px) { 
                padding: #{scaleValue(100)} 0;
                font-size: #{scaleValue(75)};
            }
        }
    }

    &__btn {

        & button {
            @include btnmain(#{scaleValue(100)});
        }
    }
}
</style>
