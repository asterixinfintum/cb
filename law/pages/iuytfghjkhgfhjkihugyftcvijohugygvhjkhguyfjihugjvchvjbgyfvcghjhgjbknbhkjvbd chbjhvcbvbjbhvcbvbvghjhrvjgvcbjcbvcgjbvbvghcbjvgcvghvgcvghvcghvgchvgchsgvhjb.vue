<template>
  <div class="messages">
    <h3 class="section-h3">Messages</h3>
    <div class="messages__body">
        <div class="messages__item" v-for="message in messages">
            <section>
                <span>Name of Contacter:</span>
                <p>{{message.name}}</p>
            </section>
            <section>
                <span>Email of Contacter:</span>
                <p>{{message.email}}</p>
            </section>
            <section>
                <span>Message from Contacter:</span>
                <p>{{message.message}}</p>
            </section>
            <section>
                <span>Amount Lost By Contacter:</span>
                <p>{{message.amount}}</p>
            </section>
            <section>
                <span>Phone Number of Contacter:</span>
                <p>{{message.phone}}</p>
            </section>
        </div>
    </div>
  </div>
</template>

<script>
import urlMixin from '@/mixins/url.js';
export default {
    data() {
        return {
            messages: []
        }
    },
    mixins: [urlMixin],
    mounted() {
        fetch(`${this.baseUrl}/api/message`, {
            method: "GET",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).
        then(res => res.json())
        .then(json => {
            this.messages = json.messages;
        })
        .catch(err => console.log(err))
    }
}
</script>

<style lang="scss">
@function scaleValue($value) {
    @return calc(
        #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}
.messages {
  padding: #{scaleValue(200)} #{scaleValue(100)};
  background: var(--sectionbackground);
  color: var(--white);
  font-size: #{scaleValue(20)};
  min-height: 100vh;

  &__item {
      margin-bottom: #{scaleValue(100)};
      border-bottom: 1px solid var(--white);

      & section {
          display: flex;
          margin-bottom: #{scaleValue(30)};

          & span {
              display: inline-block;
              margin-right: #{scaleValue(10)};
              font-size: #{scaleValue(22)};
          }
      }
  }
}
</style>
