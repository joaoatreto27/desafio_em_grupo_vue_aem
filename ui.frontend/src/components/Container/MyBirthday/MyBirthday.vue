<template>

    <div class="birthday">
        <div class="birthdayTitle">

          <MyText
          textID="birthdayText"
          msg="Birthday *"
          color="#767676"/>

          <span :id="idSpan"
          :class="ClassSpan"
          :style="{ 'color' : SpanColor}">
          {{ InvalidSpan }}</span>

        </div>

        <div class="birthdayBody">
            <div class="birthdayDay">
                <MyText
                className="nunito birthdayTitles"
                color="#767676"
                msg="Day"/>
                <select name="day" class="birthdaySelect" @change="setDay">
                    <option disabled>Day</option>
                    <option style="display:none">01</option>
                    <option id="optionDay" class="birthdayOption" v-for="day in 31" :key="day">
                        {{ day }}
                    </option>
                </select>
            </div>
            <div class="birthdayMonth">
                <MyText
                className="nunito birthdayTitles"
                color="#767676"
                msg="Month"/>
                <select name="month" class="birthdaySelect" @change="setMonth">
                    <option disabled>Month</option>
                    <option style="display:none">01</option>
                    <option id="optionMonth" class="birthdayOption" v-for="month in 12" :key="month">
                        {{ month }}
                    </option>
                </select>
            </div>
            <div class="birthdayYear">
                <MyText
                className="nunito birthdayTitles"
                color="#767676"
                msg="Year"/>
                <select name="year" class="birthdaySelect" @change="setYear">
                    <option disabled>Year</option>
                    <option style="display:none">1901</option>
                    <option id="optionYear" class="birthdayOption" v-for="year in this.yearsR" :key="year">
                        {{ year + 1900 }}
                    </option>
                </select>
            </div>
            <div class="birthdayAge">
                <MyText
                className="nunito birthdayTitles"
                color="#767676"
                msg="Age"/>
                <div class="age">
                    {{ age }}
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import MyText from '../../Micro/MyText/MyText'
import { mapActions } from 'vuex'

export default {
  name: 'MyBirthday',
  components: {
    MyText
  },
  data () {
    return {
      day: '',
      month: '',
      year: '',
      age: 0,
      yearsR: '',
      control: [false, false, false]
    }
  },
  props: {
    idSpan: {
      type: String,
      default: 'birthdayError'
    },
    ClassSpan: {
      type: String
    },
    SpanColor: {
      type: String,
      default: '#ff0000'
    },
    InvalidSpan: {
      type: String,
      default: 'Please enter your Age'
    }
  },

  methods: {

    ...mapActions(['setAge']),

    setDay (e) {
      this.day = e.target.value
      this.control[0] = true
      this.calculateAge()
    },

    setMonth (e) {
      this.month = e.target.value
      this.control[1] = true
      this.calculateAge()
    },

    setYear (e) {
      this.year = e.target.value
      this.control[2] = true
      this.calculateAge()
    },

    calculateAge () {
      if (!this.control[0] || !this.control[1] || !this.control[2]) {
        return
      }

      const date = new Date()

      let ageUser = date.getFullYear() - this.year
      const actualMonth = date.getMonth() + 1
      const actualDay = date.getDay()

      if ((actualMonth < this.month || (actualMonth === this.month && actualDay < this.day)) && this.age > 0) {
        ageUser--
      }

      this.age = ageUser
      this.setAge(this.age)
    },
    vYear () {
      const birthday = new Date()
      this.yearsR = birthday.getFullYear() - 1900
    }
  },
  created () {
    this.vYear()
  }
}

</script>

<style lang="scss" scoped>

#birthdayError {
  visibility: hidden;
  margin-left: 20px;
}

.birthdayDay {
  font-size: 1em;
}

.birthdayTitle {
  display: flex;

}

.birthdayBody {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.age {
    box-sizing: border-box;
    display: flex;
    width: 110px;
    height: 40px;
    padding: 5px;
    border: 2px solid #AAAAAA;
    border-radius: 4px;

    p {
        margin: 0;
    }
}

.birthdayAge {
  width: 110px;
  height: 40px;
}

.birthdaySelect {
    box-sizing: border-box;
    width: 103px;
    height: 40px;
    background: #FFFFFF;
    border: 2px solid #AAAAAA;
    border-radius: 4px;

    .birthdayOption {
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
    }
}

</style>
