import { Injectable } from '@angular/core';
// import { StateService } from 
import { Observable } from 'rxjs';
import { StateService } from 'src/app/shared/state.service';

interface CurrencyState {
  count: number;
}

const initialState: CurrencyState = {
  count: 42
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyStateService extends StateService<CurrencyState>{

  $count: Observable<number> = this.select(state => state.count);
  $count2: Observable<number> = this.select(state => state.count+12);

  constructor() {
    super(initialState)
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  decrement() {
    this.setState({count: this.state.count - 1})
  }
}
