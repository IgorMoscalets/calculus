import React from 'react';
import './App.css';
import { BarChart, Bar } from 'recharts';

const examerPrices = [3290, 5590, 7490, 8390];

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      lessonPrice: 700,
      lessonCount: 2,
      subjectCount: 1,
      egeWeeks: 27,
    }
    this.decrementLessonPrice = this.decrementLessonPrice.bind(this);
    this.incrementLessonPrice = this.incrementLessonPrice.bind(this);
    this.decrementLessonCount = this.decrementLessonCount.bind(this);
    this.incrementLessonCount = this.incrementLessonCount.bind(this);
    this.decrementSubjectCount = this.decrementSubjectCount.bind(this);
    this.incrementSubjectCount = this.incrementSubjectCount.bind(this);
  };

  decrementLessonPrice (){
    if(this.state.lessonPrice > 300){
    this.setState({
      lessonPrice: this.state.lessonPrice - 50
    });
    }
  }
  incrementLessonPrice (){
    if(this.state.lessonPrice < 2500){
    this.setState({
      lessonPrice: this.state.lessonPrice + 50
    });
    }
  }
  decrementLessonCount (){
    if(this.state.lessonCount > 1){
    this.setState({
      lessonCount: this.state.lessonCount - 1
    });
    }
  }
  incrementLessonCount (){
    if(this.state.lessonCount < 4){
    this.setState({
      lessonCount: this.state.lessonCount + 1
    });
    }
  }
  decrementSubjectCount (){
    if(this.state.subjectCount > 1){
    this.setState({
      subjectCount: this.state.subjectCount - 1
    });
    }
  }
  incrementSubjectCount (){
    if(this.state.subjectCount < 4){
    this.setState({
      subjectCount: this.state.subjectCount + 1
    });
    }
  }
  render (){
  return (

    <div className="App">
      <h2 className="title">
      Давай сравним с репетитором:
      </h2> 
      <div className="calc">
      <table className="compar">
      <tbody>
        <tr>
          <td align="left">Цена одного занятия с репетитором (90 мин)</td>
          <td align="right">
          <b onClick = {this.decrementLessonPrice}>-</b>
          <span>{this.state.lessonPrice} p</span>
          <b onClick = {this.incrementLessonPrice}>+</b>
          </td>
        </tr>
        <tr>
          <td align="left">Занятий в неделю</td>
          <td align="right">
          <b onClick = {this.decrementLessonCount}>-</b>
          <span>{this.state.lessonCount}</span>
          <b onClick = {this.incrementLessonCount}>+</b>
          </td>
        </tr>
        <tr>
          <td align="left">Недель до ЕГЭ</td>
          <td align="right"><span>{this.state.egeWeeks}</span></td>
        </tr>
        <tr>
          <td align="left">Предметов до подготовки</td>
          <td align="right">
            <b onClick = {this.decrementSubjectCount}>-</b>
          <span>{this.state.subjectCount}</span>
          <b onClick = {this.incrementSubjectCount}>+</b>
          </td>
        </tr>
        <tr>
          <td align="left">Итого на подготовку ЕГЭ с репетитором</td>
          <td align="right">
          <span>{this.state.egeWeeks*this.state.lessonPrice*this.state.subjectCount*this.state.lessonCount}</span>
          </td>
        </tr>
      </tbody>
      </table>
      <div className="pricechart">
      <BarChart width={150} height={228} margin={{top:15, bottom:15}} data={[{uv: this.state.egeWeeks*this.state.lessonPrice*this.state.subjectCount*this.state.lessonCount, pv: examerPrices[this.state.subjectCount - 1]}]}>
        <Bar dataKey="uv" fill="#8884d8" label={{position:'top', fontSize:'10'}}></Bar>
        <Bar dataKey="pv" fill="#8884d8" label={{position:'top', fontSize:'10'}}></Bar>
      </BarChart>
      <span className="labelchart">Репетитор Экзамер</span>
      </div>
      </div>
      <h2>Экзамер в <b>11 раз дешевле</b> занятий с репетитором и сэкономит тебе <b> {(this.state.egeWeeks*this.state.lessonPrice*this.state.subjectCount*this.state.lessonCount)-examerPrices[this.state.subjectCount - 1]} рублей</b></h2>
      <h3>Совмещай Экзамер и занятия с репетитором для максимальной эффективности</h3>
    </div>
  );
  }
} 
export default App;
