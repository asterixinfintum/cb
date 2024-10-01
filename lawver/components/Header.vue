<template>
  <div>
    <div class="header white-color capitalize" id="header">
        <section class="header__left">
            <div class="header__logoarea" @click="goToRoute('')">
                <figure class="header__logoarea--logo">
                    <img src="@/assets/imgs/logo.png"/>
                </figure>
                <div class="header__logoarea--text">
                    <p>Harfinlaw Law</p>
                    <p>refund consult law firm</p>
                </div>
            </div>
        </section>
        <section class="header__right">
            <section class="header__burger" @click="toggledropdown">
                <span></span>
                <span></span>
                <span></span>
            </section>
            <section class="header__menu" :class="{ dropdown }">
                <div class="header__menu--item" @click="goToRoute('expertise')">
                    <p>expertise</p>
                </div>
                <div class="header__menu--item" @click="goToRoute('dataprotection')">
                    <p>data protection</p>
                </div>
                <div class="header__menu--item" @click="goToRoute('riskassessment')">
                    <p>risk assessment</p>
                </div>
                <div class="header__menu--item">
                    <p>about us</p>
                    <span class="svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-cheveron-down" />
                        </svg>
                    </span>
                    <section class="header__dropdown">
                        <div class="header__dropdown--body">
                            <div class="header__dropdown--item" @click="goToRoute('recognition')">
                                <p>recognition</p>
                            </div>
                            <div class="header__dropdown--item" @click="goToRoute('efficientmethods')">
                                <p>efficient methods</p>
                            </div>
                            <div class="header__dropdown--item" @click="goToRoute('howwework')">
                                <p>how we work</p>
                            </div>
                            <div class="header__dropdown--item" @click="goToRoute('whoweare')">
                                <p>who we are</p>
                            </div>
                            <div class="header__dropdown--item" @click="goToRoute('ourmission')">
                                <p>our mission</p>
                            </div>
                            <div class="header__dropdown--item" @click="goToRoute('ourteam')">
                                <p>our team</p>
                            </div>
                            <div class="header__dropdown--item" @click="goToRoute('ourcompany')">
                                <p>our company</p>
                            </div>
                            <div class="header__dropdown--item" @click="goToRoute('services')">
                                <p>services</p>
                            </div>
                            <div class="header__dropdown--item" @click="goToRoute('billing')">
                                <p>billing</p>
                            </div>
                        </div>
                    </section>
                </div>
                <!--<div class="header__menu--item" @click="goToRoute('consultation')">
                    <p>free consultation</p>
                </div>-->
            </section>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          dropdown: false
      }
  },
  methods: {
      goToRoute(route) {
          this.dropdown = false;

          if (route) {
              return this.$router.push(`/${route}`);
          }
          
          return this.$router.push(`/`);
      },
      toggledropdown() {
          this.dropdown ? this.dropdown = false : this.dropdown = true;
      }
  }
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
        #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.header {
    background: rgba(0,0,0,.7);
    width: 100vw;
    height: #{scaleValue(70)};
    @include headerpadding;
    font-size: #{scaleValue(12)};

    position: absolute;
    top: 0;
    left: 0;
    @include flexOne;

    z-index: 10;

    @include logo;

    @media only screen and (max-width: 414px) { 
        font-size: #{scaleValue(70)};
        height: #{scaleValue(290)};
    }

    &__menu {
        @include flexOne;

        @media only screen and (max-width: 414px) { 
            display: none;
            flex-direction: column;
            align-items: flex-start;

            position: absolute;
            left: 0;
            top: #{scaleValue(289)};
            width: 100vw;
            background: rgba(0,0,0,1);

            padding-top: #{scaleValue(140)};
        }

        &--item {
            position: relative;
            margin-left: #{scaleValue(40)};
            cursor: pointer;

            @include flexOne;

            @media only screen and (max-width: 414px) { 
                margin-bottom: #{scaleValue(100)};
                margin-left: #{scaleValue(140)};
            }

            & span {

                &.svg {
                    display: inline-block;
                    margin-left: #{scaleValue(10)};
                }
            }

            & svg {
                fill: var(--white);
                height: #{scaleValue(15)};
                width: #{scaleValue(15)};

                @media only screen and (max-width: 414px) { 
                    height: #{scaleValue(90)};
                    width: #{scaleValue(90)};
                }
            }

            &:hover {
                & .header__dropdown {
                    display: block;

                    @media only screen and (max-width: 414px) { 
                        display: flex;
                        z-index: 3;
                    }
                }
            }
        }
    }

    &__dropdown {
        position: absolute;
        top: #{scaleValue(15)};
        left: 0;
        display: none;

        @media only screen and (max-width: 414px) { 
            display: none;
            top: #{scaleValue(190)};

            z-index: -1;
            width: 100vw;
            left: #{scaleValue(-140)};
            background: rgba(0,0,0,1);

            padding: 0 #{scaleValue(140)};
        }

        &:hover {
            display: block;
        }

        &--item {
            padding: #{scaleValue(15)} 0 #{scaleValue(15)} #{scaleValue(20)};
            border-bottom: 1px solid #fff;
            background: var(--black);
            width: #{scaleValue(170)};

            &:last-child {
                border: none;
            }

            @media only screen and (max-width: 414px) { 
                padding: #{scaleValue(15)} 0 #{scaleValue(15)} 0;
                width: 100%;
                margin-bottom: #{scaleValue(90)};
                background: transparent;
            }
        }
    }

    &__burger {
        flex-direction: column;
        align-items: flex-end;

        display: none;

        @media only screen and (max-width: 414px) { 
            display: flex;
        }
        
        & span {
            background: var(--white);
            display: inline-block;
            width: #{scaleValue(140)};
            height: #{scaleValue(17)};
            margin: #{scaleValue(15)} 0;
            border-radius: 3rem;

            &:nth-child(2) {
                width: #{scaleValue(120)};
            }
        }
    }
}

.dropdown {
    display: flex;
}
</style>
