<template>
  <div class="rounded-2xl bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-lg border border-gray-200/50 w-full max-w-4xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out mx-auto p-8">
    <div class="flex items-center gap-3 mb-6">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-2">
        <label class="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <div class="w-2 h-2 rounded-full bg-blue-500"></div>
          Country
        </label>
        <div class="relative">
          <select
            class="w-full rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white px-4 py-3 text-gray-900 font-medium transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300"
            v-model="selectedCountry"
          >
            <option value="" disabled>Select country</option>
            <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
          </select>
          <div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="space-y-2" >
        <label class="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <div class="w-2 h-2 rounded-full" :class="selectedCountry ? 'bg-green-500' : 'bg-gray-300'"></div>
          State
        </label>
        <div class="relative">
          <select
            class="w-full rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white px-4 py-3 text-gray-900 font-medium transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 disabled:cursor-not-allowed disabled:bg-gray-50"
            v-model="selectedState"
            :disabled="!selectedCountry"
          >
            <option value="" disabled>Select state</option>
            <option v-for="s in states" :key="s" :value="s">{{ s }}</option>
          </select>
          <div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="space-y-2">
        <label class="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <div class="w-2 h-2 rounded-full" :class="selectedState ? 'bg-yellow-500' : 'bg-gray-300'"></div>
          City
        </label>
        <div class="relative">
          <select
            class="w-full rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white px-4 py-3 text-gray-900 font-medium transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 disabled:cursor-not-allowed disabled:bg-gray-50"
            v-model="selectedCity"
            :disabled="!selectedState"
          >
            <option value="" disabled>Select city</option>
            <option v-for="c in cities" :key="c" :value="c">{{ c }}</option>
          </select>
          <div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="space-y-2">
        <label class="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <div class="w-2 h-2 rounded-full" :class="selectedCity ? 'bg-purple-500' : 'bg-gray-300'"></div>
          District
        </label>
        <div class="relative">
          <select
            class="w-full rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white px-4 py-3 text-gray-900 font-medium transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 disabled:cursor-not-allowed disabled:bg-gray-50"
            v-model="selectedDistrict"
            :disabled="!selectedCity"
          >
            <option value="" disabled>Select district</option>
            <option v-for="d in districts" :key="d" :value="d">{{ d }}</option>
          </select>
          <div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between gap-4">
      <button
        class="px-8 py-3 mt-4 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-end gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        :class="selectedDistrict ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl' : 'bg-gray-400 cursor-not-allowed'"
        :disabled="!selectedDistrict"
        @click="confirmSelection"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        Confirm Selection
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SelectCard',
  emits: ['confirm'],
  data() {
    return {
      selectedCountry: '',
      selectedState: '',
      selectedCity: '',
      selectedDistrict: '',
      options: {
        India: {
          Maharashtra: {
            Mumbai: [
              'Navi Mumbai',
              'Thane',
              'South Mumbai',
              'Western Suburbs',
              'Harbour',
              'Central Mumbai',
              'Eastern Suburbs',
              'Kalyan-Dombivli',
              'Ulhasnagar',
            ],
            Pune: [
              'Haveli',
              'Mulshi',
              'Baramati',
              'Shirur',
              'Khed',
              'Pune City',
              'Bhor',
              'Maval',
              'Junnar',
            ],
          },
          Karnataka: {
            Bengaluru: ['Urban', 'Rural'],
            Mysuru: ['Mysore'],
          },
          Delhi: {
            Delhi: ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi'],
          },
          UttarPradesh: {
            Lucknow: ['Lucknow', 'Mohammadabad', 'Malihabad', 'Sultanpur', 'Banda'],
            Kanpur: ['Kanpur', 'Akbarpur', 'Bithoor', 'Ghatampur', 'Rasoolabad', 'Sarsaul'],
          },
          Punjab: {
            Amritsar: ['Amritsar', 'Ajnala', 'Majitha', 'Attari'],
            Ludhiana: ['Ludhiana', 'Jagraon', 'Samrala', 'Payal'],
          },
          Gujarat: {
            Ahmedabad: ['Ahmedabad', 'Daskroi', 'Sanand', 'Bavla'],
            Surat: ['Surat', 'Choryasi', 'Kamrej', 'Olpad'],
          },
          Rajasthan: {
            Jaipur: ['Jaipur', 'Sanganer', 'Bagru', 'Dudu'],
            Jodhpur: ['Jodhpur', 'Luni', 'Osian', 'Balesar'],
          },
          Haryana: {
            Gurugram: ['Gurugram', 'Pataudi', 'Nuh', 'Farrukhnagar'],
            Faridabad: ['Faridabad', 'Ballabgarh', 'Tigaon', 'Badhkal'],
          },
        },
        USA: {
          California: {
            'Los Angeles': ['Central LA', 'Westside', 'Harbor'],
            'San Francisco': ['Downtown', 'Sunset'],
          },
          Texas: {
            Austin: ['Travis'],
            Dallas: ['Dallas'],
          },
          Florida: {
            Miami: ['Miami-Dade'],
            Orlando: ['Orange'],
          },
        },
      },
    }
  },
  computed: {
    countries() {
      return Object.keys(this.options)
    },
    states() {
      if (!this.selectedCountry) return []
      return Object.keys(this.options[this.selectedCountry])
    },
    cities() {
      if (!this.selectedState) return []
      return Object.keys(this.options[this.selectedCountry][this.selectedState])
    },
    districts() {
      if (!this.selectedCity) return []
      return this.options[this.selectedCountry][this.selectedState][this.selectedCity]
    },
    
  },
  watch: {
    selectedCountry() {
      this.selectedState = ''
      this.selectedCity = ''
      this.selectedDistrict = ''
    },
    selectedState() {
      this.selectedCity = ''
      this.selectedDistrict = ''
    },
    selectedCity() {
      this.selectedDistrict = ''
    },
  },
  methods: {
    confirmSelection() {
        this.$emit('confirm', {
          country: this.selectedCountry,
          state: this.selectedState,
          city: this.selectedCity,
          district: this.selectedDistrict,
        })
      }
  },
}
</script>

