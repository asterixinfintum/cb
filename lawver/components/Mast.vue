<template>
  <div class="mast">
    <div class="mast__overlay"></div>
    <h1 class="mast__h1">{{ mast }}</h1>
  </div>
</template>

<script>
export default {
    props: ['mast']
}
</script>

<style lang="scss">
@function scaleValue($value) {
    @return calc(
        #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.mast {
    position: relative;
    @include backgroundImage('../assets/imgs/unsplash-image-2-2000x1335.jpeg');
    height: #{scaleValue(400)};

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 414px) { 
        height: #{scaleValue(1500)};
    }

    &__overlay {
        @include overlay(rgb(0, 0, 0));
    }

    &__h1 {
        position: relative;
        color: var(--white);
        font-size: #{scaleValue(55)};
        text-transform: uppercase;

        @media only screen and (max-width: 414px) { 
            font-size: #{scaleValue(100)};
            text-align: center;
            line-height: #{scaleValue(140)};
        }
    }
}
</style>
