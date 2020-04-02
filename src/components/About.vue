<template>
  <div id="container" class="container py-5 w-50">
    <b-row>
      <b-col>
        <h1 class="title text-center">About</h1>
        <hr
      /></b-col>
    </b-row>
    <b-row class="my-3">
      <b-col>
        <h5 class="text-justify" style="line-height: 1.5em">
          Lovely you're curious! You're probably wondering what the demo was all
          about? Well, it's meant to show you the power of leveraging
          <strong>LIVE</strong>
          hospital data for the Emergency Medical Dispatcher (EMD) i.e. the
          person that decides which hospital to take you to once you call 911
          for an emergency.
        </h5>
        <br /><br />
        <h3>Problem:</h3>
        <hr />
        <h5 class="text-justify" style="line-height: 1.5em">
          As you may very well know, COVID19 has overwhelmed hospitals with a
          never ending flow of infected patients at a critical state. The EMD
          needs to make a swift decision to take the emergency caller to the
          right hospital. In regular day cases, the EMD performs a triage of the
          severity of the caller's situtation and dispatches a request for an
          ambulance service if warrented.
          <br /><br />
          Lets play a scenario, Alice is infected with COVID19 and is having a
          hard time breathing. Subsequently, she called 911 for medical
          assisstance. Assuming Alice passes the triage, which hospital should
          the EMD dispatch Alice to? The closest one? What if that hospital has
          all its ventilators occupied by other patients? Let's say Alice does
          end up being transported by an ambulance to Hospital A (the closest
          one). Alice might undergo another triage by a paramedic at Hospital A,
          BUT whatever the outcome of the triage, a ventilator is required to
          treat Alice, and they're all occupied. She'll either have to wait at
          the same hospital until one is vacant or get transfered to another
          hospital that POSSIBLY has a vacant ventilator.

          <br /><br />
          Now let's pause for a moment and zoom in, Alice's probabily of having
          pnuemonia just increased because she had to wait for resources to help
          her survive. A few miles away, another hospital, Hospital B, had that
          resource vacant. This is an optimization problem.
        </h5>
        <br /><br />
        <h3>Possible Solutions:</h3>
        <hr />
        <h5 class="text-justify" style="line-height: 1.5em">
          Imagine for a moment that the EMD had information about the vacant
          ventilator at Hospital B, Alice would have had a better chance of
          surviving. The Demo page you just saw was how it fits in here, it's a
          visual of what the EMD would be able to see! (FYI, The data presented
          in the demo is completely fake and randomized)
          <br /><br />
          What information and at what rate?
          <br />
          General information on resource inventory in hospitals (like beds,
          capacity, ventilators, respirators, etc.) and medical personnel.
          Idealy, the rate should be as live as possible for the EMD to make a
          better judgement.
          <br /><br />
          How will the EMD get that information?
          <br />
          All hospitals have a database where they keep track of their
          resources. These databases can be accessed (the difficulty resides on
          the hospital's infrastructure). If the database can't be accessed by a
          third party vendor, then maybe a 6 hour update from the hospital staff
          can be made on a web interface. For all of this to happen, the
          government might have to be impose hospitals to provide that data. The
          IT team efforts from both the government and the hospitals should be
          able to coorperate to make third party acess available.
        </h5>
        <br /><br />
        <h3>Questions</h3>
        <hr />
        <h5 class="text-justify" style="line-height: 1.5em">
          If there's a surge of sick patients wanting medical assisstance and
          ambulances are not able to cope the transportation, what should the
          EMD do? Should callers drive to a hospital?
          <br /><br />
          What if there isn't an IT team available in hospitals or governments
          to implement the solution?
          <br /><br />
          If there are IT teams available, how long would this take? Are they
          occupied in more important tasks relevant to the pandemic?
          <br /><br />
          Let's say the solution is implemented, what are the long term
          consequences (post-pandemic)? Does it increase government
          surviellance? Does it pave the way for third party vendors if it gets
          commercial (democratizing annonymous data)?
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
