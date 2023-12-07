<template>
    <div>
        <div class="videocustom">
            <client-only>
                <video 
                    class="video-js videocustom__video" 
                    
                    controls 
                    poster="https://res.cloudinary.com/dpy1rvkuy/image/upload/v1670449887/postervid_omsqsn.png"
                    data-setup="{}">
                    <source src="https://res.cloudinary.com/dpy1rvkuy/video/upload/v1670416528/jkhgfd_pkorfa.mp4" type="video/mp4" />
                    <source src="https://res.cloudinary.com/dpy1rvkuy/video/upload/v1670448754/abad_uadfw0.webm" type="video/webm" />
                </video>
            </client-only>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
        #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.videocustom {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: #{scaleValue(100)} 0;

    @media only screen and (max-width: 414px) {
        padding: #{scaleValue(180)} 0;
    }

    &__video {
        height: #{scaleValue(480)};
        width: #{scaleValue(600)};

        @media only screen and (max-width: 414px) { 
            width: #{scaleValue(1100)};
            height: #{scaleValue(900)};
        }
    }
}
</style>