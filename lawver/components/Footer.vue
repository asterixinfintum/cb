<template>
  <div>
    <div class="footer">
        <div class="footer__overlay"></div>
        <div class="footer__totop">
            <a href="#header">
                <span class="svg">
                    <svg>
                        <use xlink:href="@/assets/imgs/sprite.svg#icon-chevron-up" />
                    </svg>
                </span>
            </a>
        </div>
        <div class="footer__body">
            <div class="footer__top">
                <div class="footer__logoarea">
                    <figure class="footer__logoarea--logo">
                        <img src="@/assets/imgs/logo.png"/>
                    </figure>
                    <div class="footer__logoarea--text">
                        <p>Harfinlaw Firm</p>
                        <p>refund consult law firm</p>
                    </div>
                </div>

                <div class="footer__items">
                    <!--<div class="footer__item">
                        <h5 class="footer__item--h5">phone number</h5>
                        <span class="footer__item--list">
                            <p>+44 1358 300000,</p>
                            <p>+41 4458 63632</p>
                        </span>
                    </div>-->
                    <div class="footer__item">
                        <h5 class="footer__item--h5">email address</h5>
                        <span class="footer__item--list">
                            <p>support@harfinlawfirm.com</p>
                        </span>
                    </div>
                    <div class="footer__item">
                        <h5 class="footer__item--h5">our locations</h5>
                        <ul>
                            <li class="footer__item--list">
                                <p>Eleftheriou Venizelou Avenue 51,</p>
                                <p>Paphos</p>
                            </li>
                            <li class="footer__item--list">
                                <p>Cyprus</p>
                            </li>
                        </ul> 
                    </div>
                   <!-- <div class="footer__item">
                        <h5 class="footer__item--h5">our locations</h5>
                        <ul>
                            <li class="footer__item--list">
                                <p>Casinoplatz 10, 3044 Bern,</p>
                                <p>Switzerland</p>
                            </li>
                            <li class="footer__item--list">
                                <p>394030, Voronezh Oblast, Voronezh, Plekhanovskaya Street, bldg. 24a, unit 2</p>
                            </li> 
                            <li class="footer__item--list">
                                <p>Ogrodowa 58, 00-876 Warszawa, Poland</p>
                            </li>
                        </ul> 
                    </div>-->
        
                </div>
            </div>
            <div class="footer__bottom">
                <div class="footer__links">
                    <span class="footer__links--link" @click="$router.push(`/terms`)">Terms and conditions |</span>
                    <span class="footer__links--link" @click="$router.push(`/privacy`)">Privacy policy |</span>
                    <span class="footer__links--link" @click="$router.push(`/cookies`)">Cookie policy</span>
                </div>
                <h4>Copyright © 2024 Harfinlaw Firm | All rights reserved.</h4>
            </div>
        </div>
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

.footer {
    position: relative;
    font-size: #{scaleValue(15)};

    @include backgroundImage('../assets/imgs/images-7-2000x3286.jpeg');
    @include footerpadding;
    @include logo;

    &__overlay {
        @include overlay(rgb(35, 35, 35));
    }

    &__body {
        position: relative;
        z-index: 4;

        @media only screen and (max-width: 414px) { 
           padding-bottom: #{scaleValue(70)};
        }
    }

    &__top {
        display: flex; 
        margin-bottom: #{scaleValue(150)}; 

        @media only screen and (max-width: 414px) { 
            flex-direction: column;
            align-items: flex-start;
        }
    }

    &__items {
        display: flex;

        @media only screen and (max-width: 414px) { 
            flex-direction: column;
            align-items: flex-start;
            margin-top: #{scaleValue(80)};
        }
    }

    &__item {
        margin-left: #{scaleValue(100)};

        @media only screen and (max-width: 414px) { 
            margin-left: 0;
            margin-bottom: #{scaleValue(90)};
        }

        &--h5 {
            color: var(--white);
            text-transform: uppercase;
            font-size: #{scaleValue(20)};
            margin-bottom: #{scaleValue(12)};
            margin-top: #{scaleValue(50)};

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(60)};
                margin-bottom: #{scaleValue(60)};
            }
        }

        &--list {
            color: var(--whitegray);
            line-height: #{scaleValue(30)};

            & p {
                @media only screen and (max-width: 414px) { 
                    font-size: #{scaleValue(70)};
                    line-height: #{scaleValue(90)};
                }
            }
        }
    }

    &__bottom {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media only screen and (max-width: 414px) { 
            font-size: #{scaleValue(70)};
        }

        & h4 {
            color: var(--whitegray);
            font-weight: 500;
        }
    }

    &__links {
        margin-bottom: #{scaleValue(50)};
        color: var(--maingold);

        & span {
            cursor: pointer;
        }
    }

    &__totop {
        position: absolute;
        bottom: #{scaleValue(50)};
        right: #{scaleValue(150)};
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: #{scaleValue(60)};
        width: #{scaleValue(60)};
        border: 1px solid var(--white);
        cursor: pointer;

        @media only screen and (max-width: 414px) { 
           height: #{scaleValue(200)};
           width: #{scaleValue(200)};
        }

        & svg {
            fill: var(--white);
            height: #{scaleValue(50)};
            width: #{scaleValue(50)};

            @media only screen and (max-width: 414px) { 
                height: #{scaleValue(100)};
                width: #{scaleValue(100)};
            }
        }
    }
}
</style>
