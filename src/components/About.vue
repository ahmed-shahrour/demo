<template>
  <div id="container" class="container py-5">
    <b-row align-h="center">
      <b-col cols="12" sm="11" md="9">
        <h1 class="title text-center">About</h1>
        <hr
      /></b-col>
    </b-row>
    <b-row class="my-3" align-h="center">
      <b-col cols="12" sm="11" md="9">
        <h5 class="text-justify w-100" style="line-height: 1.5em;">
          Lovely, you're curious! You're probably wondering what the demo was
          all about? Well, it's meant to show you the power of leveraging
          <strong>LIVE</strong>
          hospital data for the
          <a href="https://en.wikipedia.org/wiki/Emergency_medical_dispatcher"
            >Emergency Medical Dispatcher (EMD)
          </a>
          i.e. the person that decides which hospital to take you to once you
          call 911 for a medical emergency.
        </h5>
        <br /><br />
        <h3>Problem</h3>
        <hr />
        <h5 class="text-justify" style="line-height: 1.5em;">
          As you may very well know, COVID19 has overwhelmed hospitals with an
          endless flow of infected patients at a critical state. The EMD needs
          to make a swift decision to take the emergency caller to the right
          hospital. <br /><br />
          <i>Scenario:</i>
          Alice is infected with COVID19 and is having a hard time breathing, so
          she called for medical assistance. Which hospital should the EMD
          dispatch Alice to? The nearest? Let's say Alice does end up being
          transported by an ambulance to Hospital A (the nearest hospital).
          Alice will undergo a
          <a href="https://en.wikipedia.org/wiki/Triage">triage</a> by a
          paramedic at Hospital A, BUT, whatever the outcome, a ventilator is
          required to treat Alice, and they're all occupied. She'll either have
          to wait at the same hospital until one is vacant or get transferred to
          another hospital that POSSIBLY has a vacant ventilator.

          <br /><br />
          Alice's probability of having pneumonia just increased because she had
          to wait for resources to vacate. A few miles away, another hospital,
          Hospital B, had that resource vacant. This is an optimization problem.
        </h5>
        <br /><br />
        <h3>Solution</h3>
        <hr />
        <h5 class="text-justify" style="line-height: 1.5em;">
          Imagine for a moment that the EMD had information about the vacant
          ventilator at Hospital B, Alice would have had a better chance of
          surviving. The Demo page, you just saw, fits in here, it's a visual of
          what the EMD would be able to see!
          <br /><br />
          <i>What information and at what rate?</i>
          <br />
          General information on resource inventory in hospitals (beds, ICUs,
          ventilators, respirators, PPEs, etc.) and medical personnel (doctors,
          nurses, etc.). Ideally, the rate should be as frequent as possible for
          the EMD to make a better judgment.
          <br /><br />
          <i>How will the EMD get that information?</i>
          <br />
          <ol>
            <li>
              Hospital Databases:
              <br />
              All hospitals have a database where they keep track of their
              resources. These databases can be accessed (the difficulty resides
              on the hospital's technical infrastructure).
            </li>
            <br />
            <li>
              Staff Input:
              <br />
              If the database can't be accessed by a third party easily, then
              maybe a 6-hour update window from the hospital staff can be made
              on a web interface? For all of this to happen, the government
              might have to be impose hospitals to provide that data.
            </li>
          </ol>
          <br />
          Whatever the approach, there needs to be a well coordinated team
          effort from both the government and the hospitals to cooperate and
          make this happen.
        </h5>

        <br /><br />
        <h3>Implementation</h3>
        <hr />
        <h5 class="text-justify" style="line-height: 1.5em;">
          The solution acts as a platform, meaning there are two stakeholders,
          the government (Federal, State, etc.) and the hospitals. Both need to
          be on-board for this to happen, this doesn't mean a whole country
          needs to commit but maybe we can start at a small juristriction and
          grow from there. If you have any connection with an EMS dispatch
          centre or a hospital,
          <b-link :to="{ name: 'Contact' }">please contact us</b-link>, it'll
          help us get the ball rolling.
          <br />
          <br />
          We're aiming for worst-case scenarios:
          <ol>
            <br />

            <li>
              If the government and hospitals don't have the bandwidth to
              delegate work to their IT teams or, worse, they might not have
              one.
              <br />
              <br />
              We're building a "Plug and Play" infrastructure, meaning we'll
              build everything in between the hospital database and the EMD
              Dashboard. That way the project will have less friction to get
              into the hands of the EMD. If hospitals give us their blessings,
              we can go a step further and help build a few APIs from the
              hospital's side if they don't have an IT team to support the
              endeavor.
            </li>
            <br />

            <li>
              If the government and hospitals don't give input. (Some may think
              this is not worth their time)
              <br />
              <br />
              We're also building a user input mechanism (like an IOS/Andriod
              App). It will be independent of a hospital's input, although it
              will be less reliable than using hospitals' direct database. This
              is where the user is able to provide data such as ER waiting time
              and their triage status (being rejected/accepted) at a certain
              hospital. There will be a separate EMD-like-dashboard for the
              regular layperson like you or me.
            </li>
          </ol>
          <br />
          There's a lot of work to be done, and all efforts are encocuraged, and
          yes I'm talking about YOU.
        </h5>
        <br /><br />
        <h3>Further Questions:</h3>
        <hr />
        <h5 class="text-justify" style="line-height: 1.5em;">
          <ul>
            <li>
              If there's a surge of sick patients wanting medical assistance and
              ambulances are not able to cope with the transportation, what
              should the EMD do? Should callers drive to a hospital?
            </li>
            <br />
            <li>
              If there are IT teams available, how long would this take? Are
              they occupied in more important tasks relevant to the pandemic?
            </li>

            <br />
            <li>
              Let's say the solution is implemented, what are the long term
              consequences (post-pandemic)? Does it increase government
              surveillance? Does it pave the way for third party access if it
              gets commercial (i.e. democratize anonymous health data)?
            </li>
          </ul>
        </h5>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('updateVisitedAbout', true);
  },
};
</script>

<style scoped>
#container {
  height: auto !important;
}
</style>
