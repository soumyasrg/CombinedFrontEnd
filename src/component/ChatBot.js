import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';


class SimpleForm extends Component {

  handleEnd = ({ renderedSteps, steps, values }) => {
    console.log('Rendered steps');
    console.log(renderedSteps);
    console.log('Steps');
    console.log(steps);
    console.log('Values');
    console.log(values);
  }

  render() {
    const theme = {
      background: '#EAF0F1',
      fontFamily: 'Helvetica Neue',
      headerBgColor: '#3C40C6',
      headerFontColor: '#fff',
      headerFontSize: '20px',
      botBubbleColor: '#487EB0',
      botFontColor: '#fff',
      userBubbleColor: '#4BCFFA',
      userFontColor: '#fff',
    };

    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Mozilla Survey"
          handleEnd={this.handleEnd}
          botAvatar="https://i.ya-webdesign.com/images/png-avatar-4.png"
          width="100%"
          userAvatar="https://pngimage.net/wp-content/uploads/2018/06/flat-user-icon-png-6.png"
          recognitionEnable={true}
          speechSynthesis={{ enable: true, lang: "en" }}
          steps={[
            {
              id: "1",
              message: "What is your name?",
              trigger: "name",
            },
            {
              id: "name",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue}! What is your gender?",
              trigger: "gender",
            },
            {
              id: "gender",
              options: [
                { value: "male", label: "Male", trigger: "5" },
                { value: "female", label: "Female", trigger: "5" },
              ],
            },
            {
              id: "5",
              message: "How old are you?",
              trigger: "age",
            },
            {
              id: "age",
              user: true,
              trigger: "7",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }

                return true;
              },
            },
            {
              id: "7",
              message: "Great! Which religion do you belong to?",
              trigger: "religion",
            },
            {
              id: "religion",
              user: true,
              trigger: "9",
            },
            {
              id: "9",
              message: "Okay! So, What is your caste?",
              trigger: "caste",
            },
            {
              id: "caste",
              user: true,
              trigger: "11",
            },
            {
              id: "11",
              message:
                "Nice. So, I would like to know what is your occupation?",
              trigger: "occupation",
            },
            {
              id: "occupation",
              options: [
                { value: "farmer", label: "Farmer", trigger: "14" },
                {
                  value: "livestock_breeder",
                  label: "Livestock Breeder",
                  trigger: "14",
                },
                { value: "retired", label: "Retired", trigger: "14" },
                { value: "doctor", label: "Doctor", trigger: "14" },
                { value: "student", label: "Student", trigger: "14" },
                { value: "merchant", label: "Merchant", trigger: "14" },
                {
                  value: "civil_servant",
                  label: "Civil Servant",
                  trigger: "14",
                },
                { value: "teacher", label: "Teacher", trigger: "14" },
                { value: "worker", label: "Worker", trigger: "14" },
                { value: "others", label: "Others", trigger: "101" },
              ],
            },
            {
              id: "101",
              message: "What other occupation do you do?",
              trigger: "occupation_other",
            },
            {
              id: "occupation_other",
              user: true,
              trigger: "14",
            },
            {
              id: "14",
              message:
                "Okay, We have different surveys here. Please choose the one you wish to take.",
              trigger: "survey",
            },
            {
              id: "survey",
              options: [
                {
                  value: "household",
                  label: "Household Survey",
                  trigger: "16",
                },
                {
                  value: "local_assets",
                  label: "Local Assets Survey",
                  trigger: "end",
                },
                {
                  value: "household_inc_and_liab",
                  label: "Household Income and Liabilities",
                  trigger: "end",
                },
                {
                  value: "housing_and_infrastructure",
                  label: "Housing and Infrastructure",
                  trigger: "end",
                },
                { value: "education", label: "Education", trigger: "end" },
                { value: "health", label: "Health", trigger: "end" },
                {
                  value: "perc_and_expc",
                  label: "Perceptions and Expectations",
                  trigger: "end",
                },
              ],
            },
            {
              id: "16",
              message: "Fine, So what is your main household occupation?",
              trigger: "main_household_occupation",
            },
            {
              id: "main_household_occupation",
              options: [
                { value: "farmer", label: "Farmer", trigger: "19" },
                {
                  value: "livestock_breeder",
                  label: "Livestock Breeder",
                  trigger: "19",
                },
                { value: "retired", label: "Retired", trigger: "19" },
                { value: "doctor", label: "Doctor", trigger: "19" },
                { value: "student", label: "Student", trigger: "19" },
                { value: "merchant", label: "Merchant", trigger: "19" },
                {
                  value: "civil_servant",
                  label: "Civil Servant",
                  trigger: "19",
                },
                { value: "teacher", label: "Teacher", trigger: "19" },
                { value: "worker", label: "Worker", trigger: "19" },
                {
                  value: "others",
                  label: "Others",
                  trigger: "household_other_occupation",
                },
              ],
            },
            {
              id: "household_other_occupation",
              user: true,
              trigger: "19",
            },
            {
              id: "19",
              message:
                "Just a few more questions. What is your household annual income?",
              trigger: "household_annual_income",
            },
            {
              id: "household_annual_income",
              user: true,
              trigger: "21",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                }
                return true;
              },
            },
            {
              id: "21",
              message: "Do you own any agricultural land/wasteland ?",
              trigger: "own_land",
            },
            {
              id: "own_land",
              options: [
                { value: "yes", label: "Yes", trigger: "102" },
                { value: "no", label: "No", trigger: "24" },
              ],
            },
            {
              id: "102",
              message: "Enter the land size in yards:",
              trigger: "own_land_size",
            },
            {
              id: "own_land_size",
              user: true,
              trigger: "24",
            },
            {
              id: "24",
              message: "Which type of house do you live in?",
              trigger: "house_type",
            },
            {
              id: "house_type",
              options: [
                { value: "katcha", label: "Katcha", trigger: "26" },
                { value: "pucca", label: "Pucca", trigger: "26" },
                { value: "mixed", label: "Mixed", trigger: "26" },
              ],
            },
            {
              id: "26",
              message: "What is your household type?",
              trigger: "household_type",
            },
            {
              id: "household_type",
              options: [
                { value: "nuclear", label: "Nuclear", trigger: "28" },
                { value: "joint", label: "Joint", trigger: "28" },
                { value: "extended", label: "Extended", trigger: "28" },
                { value: "others", label: "Others", trigger: "28" },
              ],
            },
            {
              id: "28",
              message:
                "Last Question!! Do you have permanent domicile of the village?",
              trigger: "permanent_domicile",
            },
            {
              id: "permanent_domicile",
              options: [
                { value: "yes", label: "Yes", trigger: "30" },
                { value: "no", label: "No", trigger: "end" },
              ],
            },
            {
              id: "30",
              message: "From when do you have the domicile?",
              trigger: "domicile_time",
            },
            {
              id: "domicile_time",
              options: [
                { value: "birth", label: "Birth", trigger: "end" },
                { value: "immigrant", label: "Immigrant", trigger: "32" },
              ],
            },
            {
              id: "32",
              message: "So when did you get the permanent domicile?",
              trigger: "domicile_time_immigrant",
            },
            {
              id: "domicile_time_immigrant",
              options: [
                { value: "marriage", label: "Marriage", trigger: "end" },
                { value: "labour", label: "Labour", trigger: "end" },
                { value: "service", label: "Service", trigger: "end" },
                { value: "business", label: "Business", trigger: "end" },
                {
                  value: "domicile_time_immigrant_other",
                  label: "Other",
                  trigger: "103",
                },
              ],
            },
            {
              id: "103",
              message: "What is the other type of immigration you selected?",
              trigger: "domicile_time_immigrant_other",
            },
            {
              id: "domicile_time_immigrant_other",
              user: true,
              trigger: "end",
            },
            // {
            //   id: "34",
            //   message:
            //     "Do you own Agricultural Land in Possession (in Bighas):",
            //   trigger: "land_possess",
            // },
            // {
            //   id: "land_possess",
            //   options: [
            //     { value: "yes", label: "Yes", trigger: "104" },
            //     { value: "no", label: "No", trigger: "36" },
            //   ],
            // },
            // {
            //   id: "104",
            //   component: (
            //     <select multiple size="6">
            //       <option value="own_irrigate">Owned (Irrigated)</option>
            //       <option value="own_unirrigate">Owned (Unirrigated)</option>
            //       <option value="lease_out_irrigate">Leased out (Irrigated)</option>
            //       <option value="lease_out_unirrigate">Leased out (Unirrigated)</option>
            //       <option value="lease_in_irrigate">Leased IN (Irrigated)</option>
            //       <option value="lease_in_unirrigate">Leased IN (Unirrigated)</option>
            //     </select>
            //   ),
            //   trigger: "total_bighas",
            // },
            // {
            //   id: "total_bighas",
            //   message: "Enter Total Bighas:Irrigated-",
            //   trigger: "total_irrigate",
            // },
            // {
            //   id: "total_irrigate",
            //   user: true,
            //   trigger: "105",
            // },
            // {
            //   id: "105",
            //   message: "Enter Total Bighas:Unirrigated-",
            //   trigger: "total_unirrigate",
            // },
            // {
            //   id: "total_unirrigate",
            //   user: true,
            //   trigger: "36",
            // },
            // {
            //   id: "36",
            //   message: "Do you have Built up Area?",
            //   options: [
            //     { value: "yes", label: "Yes", trigger: "end" },
            //     { value: "no", label: "No", trigger: "end" },
            //   ],
            // },
            {
              id: "end",
              message:
                "Thank you for having patience. Your data was submitted successfully!",
              end: true,
            },
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;