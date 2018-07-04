# Material-UI Arabic Datepicker
[![npm package](https://img.shields.io/npm/v/material-ui-pickers.svg)]()
[![npm download](https://img.shields.io/npm/dm/material-ui-pickers.svg)]()
> Datepicker component, that implements material design date and time pickers for material-ui v1 customized with arabic header, months and weekdays and English numbers, modfied implementation from materail-ui-pickers

### Installation
Available as npm package.
```sh
npm install material-ui-arabic-datepicker -S
```



```jsx
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import ArabicDatePicker from 'material-ui-arabic-datepicker/ArabicDatePicker';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


function App() {
  return (

    <MuiThemeProvider>
               <EditedDatePicker
                  fullWidth
                  leftArrowIcon={<KeyboardArrowLeft />}
                  rightArrowIcon={<KeyboardArrowRight />}
                  cancelLabel = "ألغاء"
                  okLabel = "تأكيد"
                  openToYearSelection
                />
      </MuiThemeProvider>

  );
}

render(<App />, document.querySelector('#app'));
```


[![Screenshot_from_2018-07-04_17-15-04.png](https://s22.postimg.cc/5wcv2chyp/Screenshot_from_2018-07-04_17-15-04.png)](https://postimg.cc/image/4u2ojsz59/)

And the last step of installation would be an icon font. By default, we are relying on material-icons font, but it's possible to override any icons with the help of corresponding props.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## Documentation
Check out materail-ui-pickers original [documentation website](https://material-ui-pickers.firebaseapp.com/)

## material-ui-pickers
Check out the [material-ui-pickers](https://www.npmjs.com/package/material-ui-pickers)



### LICENSE
The project is licensed under the terms of [MIT license](https://github.com/dmtrKovalenko/material-ui-pickers/blob/master/LICENSE)
