<template>
  <div class="p-5">
    <b-card class="shadow-lg">
      <b-table
        id="raw-table"
        class="mb-0"
        :items="tableItems"
        :fields="fields"
        sticky-header="75vh"
        no-border-collapse
        style="display: inline-block;"
        responsive
        :sort-by="'health'"
        :sort-desc="false"
        :tbody-transition-props="transProps"
        primary-key="id"
      >
      </b-table>
    </b-card>
  </div>
</template>

<script>
import conditions from '../DummyData/conditionTranslate';

export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!vm.$store.getters.isOpt || vm.$store.getters.isMap) {
        vm.$router.replace({ name: 'Map' });
      }
    });
  },
  data() {
    return {
      transProps: {
        name: 'flip-list'
      },
      fields: [
        {
          key: 'name',
          label: 'Hospital',
          sortable: true
        },
        {
          key: 'condition',
          label: 'Condition',
          sortable: true
        },
        {
          key: 'health',
          label: 'Resource Occupancy (%)',
          sortable: true
        },
        {
          key: 'er_time',
          label: 'ER Wait Time (hr)',
          sortable: true
        },
        {
          key: 'doctors',
          label: 'Doctors',
          sortable: true
        },
        {
          key: 'nurses',
          label: 'Nurses',
          sortable: true
        },
        {
          key: 'icus_occupied',
          label: 'ICUs Occupied',
          sortable: true
        },
        {
          key: 'icus_total',
          label: 'ICUs Total',
          sortable: true
        },
        {
          key: 'beds_occupied',
          label: 'Beds Occupied',
          sortable: true
        },
        {
          key: 'beds_total',
          label: 'Beds Total',
          sortable: true
        },
        {
          key: 'ventilators_occupied',
          label: 'Ventilators Occupied',
          sortable: true
        },
        {
          key: 'ventilators_total',
          label: 'Ventilators Total',
          sortable: true
        },
        {
          key: 'respirators_occupied',
          label: 'Respirators Occupied',
          sortable: true
        },
        {
          key: 'respirators_total',
          label: 'Respirators Total',
          sortable: true
        }
      ]
    };
  },
  computed: {
    tableItems() {
      return this.$store.getters.hospitals.map(hospital => {
        return {
          id: hospital.id,
          name: hospital.name,
          condition:
            hospital.condition === conditions.CRITICAL
              ? 'Critical'
              : hospital.condition === conditions.MILD
              ? 'Mild'
              : 'Stable',
          respirators_occupied: hospital.inventory.respirators.occupied,
          respirators_total: hospital.inventory.respirators.total,
          ventilators_occupied: hospital.inventory.ventilators.occupied,
          ventilators_total: hospital.inventory.ventilators.total,
          icus_occupied: hospital.inventory.icus.occupied,
          icus_total: hospital.inventory.icus.total,
          beds_occupied: hospital.inventory.beds.occupied,
          beds_total: hospital.inventory.beds.total,
          doctors: hospital.doctors,
          nurses: hospital.nurses,
          er_time: hospital.er_time,
          health: hospital.health,
          _rowVariant:
            hospital.condition === conditions.CRITICAL
              ? 'danger'
              : hospital.condition === conditions.MILD
              ? 'warning'
              : 'success'
        };
      });
    }
  }
};
</script>

<style>
table#raw-table .flip-list-move {
  transition: transform 0.8s;
}
</style>
