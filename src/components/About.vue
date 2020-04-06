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
          Lovely you're curious! You're probably wondering what the demo was all
          about? Well, it's meant to show you the power of leveraging
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
          As you may very well know, COVID19 has overwhelmed hospitals with a
          never ending flow of infected patients at a critical state. The EMD
          needs to make a swift decision to take the emergency caller to the
          right hospital. In regular day cases, the EMD performs a
          <a href="https://en.wikipedia.org/wiki/Triage">triage</a> of the
          severity of the caller's situtation and dispatches a request for an
          ambulance service if warrented. <br /><br />
          Lets play a scenario, Alice is infected with COVID19 and is having a
          hard time breathing. Subsequently, she called 911 for medical
          assisstance. Assuming Alice passes the triage, which hospital should
          the EMD dispatch Alice to? The closest one? What if that hospital has
          all its ventilators occupied by other patients? Let's say Alice does
          end up being transported by an ambulance to, the closest hospital,
          Hospital A. Alice might undergo another triage by a paramedic at
          Hospital A, BUT whatever the outcome of the triage, a ventilator is
          required to treat Alice, and they're all occupied. She'll either have
          to wait at the same hospital until one is vacant or get transfered to
          another hospital that POSSIBLY has a vacant ventilator.

          <br /><br />
          Now let's pause for a moment and zoom in, Alice's probability of
          having pneumonia just increased because she had to wait for resources
          to vacate. A few miles away, another hospital, Hospital B, had that
          resource vacant. This is an optimization problem.
        </h5>
        <br /><br />
        <h3>Solution</h3>
        <hr />
        <h5 class="text-justify" style="line-height: 1.5em;">
          Imagine for a moment that the EMD had information about the vacant
          ventilator at Hospital B, Alice would have had a better chance of
          surviving. The Demo page, you just saw, fits in here, it's a visual of
          what the EMD would be able to see! (I want to emphasize that the data
          presented in the demo is completely fake and randomized, although the
          hospital names and their locations are real).
          <br /><br />
          What information and at what rate?
          <br />
          General information on resource inventory in hospitals (beds, ICUs,
          ventilators, respirators, etc.) and medical personnel (doctors,
          nurses, etc.). Ideally, the rate should be as live as possible for the
          EMD to make a better judgement.
          <br /><br />
          How will the EMD get that information?
          <br />
          All hospitals have a database where they keep track of their
          resources. These databases can be accessed (the difficulty resides on
          the hospital's infrastructure). If the database can't be accessed by a
          third party easily, then maybe a 6 hour update window from the
          hospital staff can be made on a web interface? For all of this to
          happen, the government might have to be impose hospitals to provide
          that data. The IT team efforts from both the government and the
          hospitals should get involved and coorperate to make this happen.
        </h5>

        <br /><br />
        <h3>Solution<b-icon icon="arrow-right"></b-icon> Reality</h3>
        <hr />
        <h5 class="text-justify" style="line-height: 1.5em;"></h5>
        <br /><br />
        <h3>Further Questions:</h3>
        <hr />
        <h5 class="text-justify" style="line-height: 1.5em;">
          <ul>
            <li>
              If there's a surge of sick patients wanting medical assisstance
              and ambulances are not able to cope the transportation, what
              should the EMD do? Should callers drive to a hospital?
            </li>
            <br />
            <li>
              What if there isn't an IT team available in hospitals or
              governments to implement the solution?
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
              gets commercial (i.e. democratize annonymous health data)?
            </li>
          </ul>
        </h5>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#container {
  height: auto !important;
}
</style>
