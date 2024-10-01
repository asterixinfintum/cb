<template>
  <div class="jumbotron">
    <div class="jumbotron__overlay"></div>
    <div class="jumbotron__body white-color">
        <section class="jumbotron__body--welcome text-margin">
            <p>Welcome to</p>
        </section>
        <section class="jumbotron__body--h1 text-margin">
            <h1>Harfinlaw consult law firm</h1>
        </section>
        <section class="jumbotron__body--sub text-margin">
            <p>Honest treatment, Clear advice, Smart strategy Since 2004 - Present</p>
        </section>
        <section class="jumbotron__body--btn">
            <button @click="$router.push(`/consultation`)">free consultation</button>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
        #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}
.text-margin {
    margin-bottom: #{scaleValue(20)};

    @media only screen and (max-width: 414px) { 
        margin-bottom: #{scaleValue(60)};
    }
}

    .jumbotron {
        position: relative;
        @include backgroundImage('../assets/imgs/mainham.webp');
        height: #{scaleValue(900)};

        @media only screen and (max-width: 414px) { 
            height: 100vh;
        }

        &__overlay {
            @include overlay(rgb(0, 0, 0));
        }

        &__body {
            position: relative;
            height: 100%;
            @include headerpadding;
            padding-top: #{scaleValue(310)};
            z-index: 1;

            @media only screen and (max-width: 414px) { 
                 padding-top: #{scaleValue(1100)};
            }

            &--welcome {
                color: var(--maingold);
                font-size: #{scaleValue(30)};
                font-weight: bold;

                @media only screen and (max-width: 414px) { 
                    font-size: #{scaleValue(135)};
                }
            }

            &--h1 {
                font-size: #{scaleValue(45)};
                width: #{scaleValue(700)};

                @media only screen and (max-width: 414px) { 
                    font-size: #{scaleValue(120)};
                    width: 100vw;
                }
            }

            &--sub {
                font-size: #{scaleValue(17)};
                width: #{scaleValue(380)};
                line-height: #{scaleValue(30)};

                @media only screen and (max-width: 414px) { 
                    font-size: #{scaleValue(80)};
                    width: 100vw;
                    line-height: #{scaleValue(130)};
                }
            }
            
            &--btn {
                margin-top: #{scaleValue(50)};

                @media only screen and (max-width: 414px) { 
                    margin-top: #{scaleValue(300)};
                }

                & button {
                    @include btnmain(#{scaleValue(100)})
                }
            }
        }
    }
</style>
