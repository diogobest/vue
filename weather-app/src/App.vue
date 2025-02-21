<template>
    <select v-model="$i18n.locale">
      <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang">
        {{ lang }}
      </option>
    </select>
  <v-timeline>
    <template v-for="(company, index) in companies">
      <v-timeline-item size="large">
        <template v-slot:icon>
          <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
        </template>
        <template v-slot:opposite>
          <span>{{ $t('companies.company_name.name') }}</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            {{ company.card_title }}
          </v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
        </v-card>
      </v-timeline-item>
    </template>
  </v-timeline>
</template>

<script>
  export default {
    data: () => ({
      companies: [
        {
          name: 'nome',
          icon: 'mdi-star',
          card_title: 'Lorem ipsum',
        },
        {
          name: 'company 2',
          icon: 'mdi-book-variant',
          card_title: 'Lorem ipsum',
        },
        {
          name: 'company 3',
          icon: 'mdi-airballoon',
          card_title: 'Lorem ipsum',
        },
        {
          name: 'company 4',
          icon: 'mdi-layers-triple',
          card_title: 'Lorem ipsum',
        },
      ],
    }),
  }
</script>
