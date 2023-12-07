<template>
  <div class="brands">
    <div v-if="label === 'trusted by'">
        <h3 class="section-h3">{{label}}</h3>
        <div class="brands__cards">
            <div class="brands__card">
                <figure>
                    <img src="@/assets/imgs/00291173862-images-1-15938605401592-280x166.png"/>
                </figure>
            </div>
            <div class="brands__card">
                <figure>
                    <img src="@/assets/imgs/450324202863-ab8140cc4317c0467126d6884c0e04ce-280x175.png"/>
                </figure>
            </div>
            <div class="brands__card">
                <figure>
                    <img src="@/assets/imgs/2490438198864-logohonenu31-280x127.jpeg"/>
                </figure>
            </div>
            <div class="brands__card">
                <figure>
                    <img src="@/assets/imgs/7201050630867-ecljlogowide-280x168.png"/>
                </figure>
            </div>
        </div>
    </div>

    <div v-if="label === 'awards'">
        <h3 class="section-h3">{{label}}</h3>
        <div class="brands__cards">
            <div class="brands__card">
                <figure>
                    <img src="@/assets/imgs/award15-15937781344296-280x233.jpeg"/>
                </figure>
            </div>
            <div class="brands__card">
                <figure>
                    <img src="@/assets/imgs/2019-high-resolution-iae-award-logo-280x233.png"/>
                </figure>
            </div>
            <div class="brands__card">
                <figure>
                    <img src="@/assets/imgs/final-logo-original500x221-280x233.png"/>
                </figure>
            </div>
            <div class="brands__card">
                <figure>
                    <img src="@/assets/imgs/cca-web-280x233.png"/>
                </figure>
            </div>
        </div>
    </div>

    <div v-if="label === 'our partners'">
        <h3 class="section-h3">{{label}}</h3>
        <div class="brands__cards">
            <div class="brands__card">
                <figure>
                    <img src="@/assets/imgs/untitled-design-1-280x233.png"/>
                </figure>
            </div>
            <div class="brands__card">
                <figure>
                    <img src="@/assets/imgs/untitled-design-2-280x233.png"/>
                </figure>
            </div>
            <div class="brands__card">
                <figure>
                    <img src="@/assets/imgs/untitled-design-3-280x233.png"/>
                </figure>
            </div>
            <div class="brands__card">
                <figure>
                    <img src="@/assets/imgs/untitled-design-280x233.png"/>
                </figure>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['label']
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
        #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.brands {
    padding: #{scaleValue(70)} #{scaleValue(160)};

    &__cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(#{scaleValue(20)}, 1fr));
        grid-gap: #{scaleValue(30)};
        align-items: start;

        @media only screen and (max-width: 414px) { 
            display: flex;
            flex-direction: column;
        }
    }

    &__card {
        border-radius: .3rem;
        background: var(--cardbackground);
        overflow: hidden;
        height: #{scaleValue(200)};
        display: flex;
        justify-content: center;
        align-items: center;

        padding: #{scaleValue(40)} #{scaleValue(50)};

        @media only screen and (max-width: 414px) { 
            height: #{scaleValue(800)};
            margin: #{scaleValue(30)} 0;
        }

        & figure {
            
            & img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }
    }
}
</style>
