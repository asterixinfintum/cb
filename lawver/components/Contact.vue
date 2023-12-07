<template>
  <div>
    <div class="contact">
        <div class="contact__popup" v-if="sent">
            <p class="page__paras">
                Message sent successfully. <br/>A representative will reach out to you as soon as possible.
            </p>
        </div>
        <div class="contact__overlay"></div>
        <div class="contact__body">
            <h3 class="section-h3">free consultation</h3>
            <p class="contact__body--sub section-sub">Your personal data will not be published. Read our Terms & Conditions and Privacy Policy.</p>
            <div class="contact__form">
                <section class="contact__formarea">
                    <input placeholder="Name" class="together" v-model="name" ref="name"/>
                    <input placeholder="E-mail" class="together" v-model="email" ref="email"/>
                </section>
                <section class="contact__formarea">
                    <input placeholder="Phone" class="alone" v-model="phone" ref="phone"/>
                </section>
                <!--<section class="contact__formarea">
                    <input placeholder="Amount lost (in US Dollars" class="alone" v-model="amount" ref="amount"/>
                </section>-->
                <section class="contact__formarea">
                    <textarea placeholder="Tell us about your problem" class="alone" v-model="message" ref="message"></textarea>
                </section>
                <section class="contact__body--btn">
                    <button v-if="!sending" @click="submit">send message</button>
                    <button v-if="sending">sending</button>
                </section>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import urlMixin from '@/mixins/url.js';
export default {
    data() {
        return {
            name: null,
            email: null,
            phone: null,
            amount: null,
            message: null,
            sending: false,
            sent: false,
            error: false
        }
    },
    mixins: [urlMixin],
    methods: {
        toggleInputClass(key) {
            this.$refs[`${key}`].style.border = `1px solid #000000`;
        },
        submit() {
            const { name, email, phone, message } = this;
            const details = { name, email, phone, message };

            for (const key in details) {
                if (details[key] === null) {
                    this.$refs[`${key}`].style.border = `1px solid red`;
                }
            }

            if (name && email && phone && message) {
                this.sending = true
                fetch(`${this.baseUrl}/api/message`, {
                    method: "POST",
                    body: JSON.stringify(details),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                .then(response => response.json())
                .then(json => {
                    this.sending = false;
                    this.sent = true;

                    this.name = null;
                    this.email = null;
                    this.phone = null;
                    this.message = null;

                    setTimeout(() => {
                        this.sent = false;
                    }, 5000)
                })
                .catch(err => {
                    console.log(err);
                    this.sending = false;
                })
            }
        }
    },
    watch: {
        name: function() {
            this.toggleInputClass('name');
        },
        email: function() {
            this.toggleInputClass('email');
        },
        phone: function() {
            this.toggleInputClass('phone');
        },
        amount: function() {
            this.toggleInputClass('amount');
        },
        message: function() {
            this.toggleInputClass('message');
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

@keyframes moveDown {
  0% {
    transform: translateY(-16rem);
  }
  
  50% {
    transform: translateY(2rem);
  }
  
  100% {
    transform: translateY(0rem);
  }
}
.contact {
    @include backgroundImage('../assets/imgs/yeshi-kangrang-pm-vwl2ypes-unsplash-2000x2500.jpeg');
    position: relative;
    padding: #{scaleValue(100)};

    &__overlay {
        @include overlay(rgb(0, 0, 0));
    }

    &__popup {
        position: fixed;
        top: #{scaleValue(100)};
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--white);
        left: 0;
        animation: moveDown .3s ease-in-out;

         @include footerpadding;
         z-index: 40;
    }
    
    &__body {
        margin: 0 auto;
        color: var(--white);
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;

        @media only screen and (max-width: 414px) { 
           padding-top: #{scaleValue(200)};
           padding-bottom: #{scaleValue(200)};
        }

        &--sub {
            text-align: center;
            width: #{scaleValue(400)};

            @media only screen and (max-width: 414px) { 
                width: 100%;
            }
        }

        &--btn {
            display: flex;
            justify-content: center;

            @media only screen and (max-width: 414px) { 
                margin-top: #{scaleValue(180)};
            }

            & button {
                @include btnmain(#{scaleValue(100)});
                text-transform: capitalize;
                font-size: #{scaleValue(15)};
                font-weight: 500;
            }
        }
    }

    &__form {
        margin-top: #{scaleValue(40)};
    }

    &__formarea {
        display: flex;
        justify-content: space-between;
        margin-bottom: #{scaleValue(20)};

        width: #{scaleValue(800)};

        @media only screen and (max-width: 414px) { 
          flex-direction: column;
          width: #{scaleValue(1300)};
        }

        & input, textarea {
            border: none;
            outline: none;
            font-size: #{scaleValue(17)};
            border-radius: .3rem;
            padding: #{scaleValue(10)};
            display: block;

            height: #{scaleValue(45)};

            @media only screen and (max-width: 414px) { 
                height: #{scaleValue(160)};
                font-size: #{scaleValue(70)};
                padding: #{scaleValue(40)};
            }

            &.alone {
                width: 100%;

                @media only screen and (max-width: 414px) { 
                    margin-bottom: #{scaleValue(70)};
                }
            }

            &.together {
                width: #{scaleValue(380)};

                @media only screen and (max-width: 414px) { 
                    width: 100%;
                    margin-bottom: #{scaleValue(70)};
                }
            }
        }

        & textarea {
            height: #{scaleValue(200)};

            @media only screen and (max-width: 414px) {
                height: #{scaleValue(700)};
            }
        }
    }
}
</style>
