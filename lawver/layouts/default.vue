<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Harfinlaw-Firm-IndexPage",
  head() {
    return {
      title: "Harfinlaw Firm - Legal Expertise",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Harfinlaw Firm is a top-tier law firm providing expert legal services in a wide range of practice areas.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Harfinlaw Firm - Legal Expertise",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Harfinlaw Firm is a top-tier law firm providing expert legal services in a wide range of practice areas.",
        },
      ],
    };
  },
};
</script>
