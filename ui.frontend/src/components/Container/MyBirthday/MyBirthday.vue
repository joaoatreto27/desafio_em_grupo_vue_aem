<template>

    <div class="birthday">

        <MyText
        className="nunito"
        msg="Birthday *"/>

        <div class="birthdayBody">
            <div class="birthdayDay">
                <MyText
                className="nunito"
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
                className="nunito"
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
                className="nunito"
                msg="Year"/>
                <select name="year" class="birthdaySelect" @change="setYear">
                    <option disabled>Year</option>
                    <option style="display:none">1901</option>
                    <option id="optionYear" class="birthdayOption" v-for="year in 2022" :key="year">
                        {{ year }}
                    </option>
                </select>
            </div>
            <div class="birthdayAge">
                <MyText
                className="nunito"
                msg="Age"/>
                <div class="age">
                    <p>69</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import MyText from '../../Micro/MyText/MyText'

export default {
  name: 'MyBirthday',
  components: {
    MyText
  }
}

</script>

<style lang="scss" scoped>
.birthdayBody {
    display: flex;
    justify-content: space-between;
}

.age {
    box-sizing: border-box;
    display: flex;
    width: 110px;
    height: 40px;
    background: #FFFFFF;
    border: 2px solid #AAAAAA;
    border-radius: 4px;
}

.birthdaySelect {
    box-sizing: border-box;
    width: 103px;
    height: 40px;
    background: #FFFFFF;
    border: 2px solid #AAAAAA;
    border-radius: 4px;
    flex-grow: 0;

    .birthdayOption {
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
    }
}

</style>
