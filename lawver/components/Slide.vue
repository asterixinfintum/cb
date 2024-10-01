<template>
  <div class="slide">
    <h3 class="section-h3">what our fantastic clients are saying</h3>
    <div class="swiper">
        <div class="slide__body swiper-wrapper">
        
            <section class="slide__item swiper-slide">
                <figure>
                    <img src="@/assets/imgs/828-edward-cisneros-h6wpor9mjs-unsplash-600x400.jpeg"/>
                </figure>
                <p class="first">{{items[0].review}}</p>
                <p class="second">{{items[0].name}}</p>
            </section>
        
            <section class="slide__item swiper-slide">
                <figure>
                    <img src="@/assets/imgs/0150838402743852-christina-wocintechchat-com-sjvdxw0azqw-unsplash-600x429.jpeg"/>
                </figure>
                <p class="first">{{items[1].review}}</p>
                <p class="second">{{items[1].name}}</p>
            </section>

            <section class="slide__item swiper-slide">
                <figure>
                    <img src="@/assets/imgs/0111828482034838-foto-garage-ag-fskgvcrrzmg-unsplash-600x429.jpeg"/>
                </figure>
                <p class="first">{{items[2].review}}</p>
                <p class="second">{{items[2].name}}</p>
            </section>

            <section class="slide__item swiper-slide">
                <figure>
                    <img src="@/assets/imgs/0150838402743850-christina-wocintechchat-com-s3grmiuhpnu-unsplash-600x429.jpeg"/>
                </figure>
                <p class="first">{{items[3].review}}</p>
                <p class="second">{{items[3].name}}</p>
            </section>

            <section class="slide__item swiper-slide">
                <figure>
                    <img src="@/assets/imgs/096436482606832-david-mumma-achqutpmhki-unsplash-600x429.jpeg"/>
                </figure>
                <p class="first">{{items[4].review}}</p>
                <p class="second">{{items[4].name}}</p>
            </section>
        
    </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css';

export default {
    data() {
        return {
            left: 0,
            center: 1,
            right: 2,
            items: [
                {
                    id: 0,
                    initial: 'one',
                    name: 'Penny',
                    review: 'Friendly and efficient team at this Harfinlaw Firm'
                },
                {
                    id: 1,
                    initial: 'two',
                    name: 'Patinetteke Huart',
                    review: "My biggest thanks to Harfinlaw Firm. They're just so kind, polite, intelligent, very calm... I got more than half my money, sure to get back the rest of my funds"
                },
                {
                    id: 2,
                    initial: 'three',
                    name: 'Zin Kai Ng',
                    review: "The service is excellent. They helped me. I got back half from one bank. We are still working on the other half from the other. I recommend them."
                },
                {
                    id: 3,
                    initial: 'four',
                    name: 'Tonya Anne Huntley',
                    review: "They really helped me get started on my claim and was very friendly."
                },
                {
                    id: 4,
                    initial: 'five',
                    name: 'Malcolm Maclean',
                    review: "Harfinlaw Firm was great to deal with. They were frank and helpful and followed up immediately."
                }
            ]
        }
    },
    mounted() {
       Swiper.use([Navigation, Pagination, Autoplay]);
       // init Swiper:
        /* eslint-disable no-unused-vars */
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            // @see https://swiperjs.com/swiper-api#parameters
            direction: 'horizontal',
            loop: true,
            modules: [Navigation, Pagination, Autoplay],
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            autoplay: {
                delay: 3000
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        })
    }
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
        #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}
.slide {
    padding: #{scaleValue(70)} #{scaleValue(160)};

    &__body {
        position: relative;
        display: flex;
    }

    &__item {
        display: flex;
        align-items: center;
        flex-direction: column;

        & figure {
            border-radius: 100%;
            overflow: hidden;
            width: #{scaleValue(200)};
            height: #{scaleValue(200)};
            margin-bottom: #{scaleValue(50)};

            @media only screen and (max-width: 414px) { 
                height: #{scaleValue(800)};
                width: #{scaleValue(800)};
            }

            & img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }

        & p {
            text-align: center;

            &.first {
                font-size: #{scaleValue(18)};
                line-height: #{scaleValue(30)};
                margin-bottom: #{scaleValue(60)};
                width: #{scaleValue(700)};

                @media only screen and (max-width: 414px) { 
                    font-size: #{scaleValue(70)};
                    line-height: #{scaleValue(120)};
                    width: 100%;
                }
            }

            &.second {
                font-size: #{scaleValue(20)};
                font-weight: 600;

                @media only screen and (max-width: 414px) { 
                    font-size: #{scaleValue(70)};
                    margin-top: #{scaleValue(150)};
                }
            }
        }
    }
}

.swiper {
  height: #{scaleValue(500)};
  overflow: hidden;
  position: relative;
  width: #{scaleValue(900)};
  margin: 0 auto;

  @media only screen and (max-width: 414px) { 
    height: #{scaleValue(1900)};
    width: #{scaleValue(1200)};
  }
}

.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
