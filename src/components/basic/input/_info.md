Кусь 😄 <br>
За основу взят плагин https://vuelidate.js.org <br>

**Использование** <br>
    Подключаем один из компонентов
    <TextInput
        label="Test" // заголовок перед формой
        placeholder="placeholder"
        defaultValue="Test" // значение по умолчанию
        :rules="[
            'required', // обязательное 
            'minLength:3', // мин. длина
            'maxLength:10', // макс. длина
            'between:5:2000', // диапазон
            'minValue:10', // мин. число
            'maxValue:200', // макс. число
            ]"
    />
   
   
**Добавить своё правило** <br>
    В методе файла components/basic/input/validation.js > itemValidations добавить условие, по которому будет работать логика
    Опираться на => https://vuelidate.js.org/#sub-simplest-example
    
    В файле components/basic/input/include/error.vue добавить условие, для показа правила на морде

