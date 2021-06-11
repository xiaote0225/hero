import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


export interface TransferItem {
  key: string;
  value: string;
  checked?: boolean;
}

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferPanelComponent implements OnInit, OnChanges {
  @Input()
  inputList: TransferItem[] = [];
  @Input()
  showInputFlag!: boolean;

  showList: TransferItem[] = [];
  checkedList: TransferItem[] = [];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    const { inputList } = changes;
    if(inputList){
      this.showList = inputList.currentValue.slice(0);
    }
  }

  ngOnInit(): void {
  }

  search(event:Event){
    const { value } = (event.target as HTMLInputElement);
    this.showList = this.inputList.filter(item => item.value.indexOf(value) > -1);
  }

  clickLi(item: TransferItem){
    const i = this.checkedList.indexOf(item);
    if(i === -1){
      this.checkedList.push(item);
    }else{
      this.checkedList.splice(i,1);
    }

  }

  isChecked(obj: TransferItem): boolean{
    if(this.checkedList.indexOf(obj) > -1){
      return true;
    }else{
      return false;
    }
  }



  //TODO
  //1.下拉列表中的内容随着搜索框中值的变化而变化；
  //2.点击下拉列表中的选项选中，再次点击取消选中，样式修改；
  //3.上方的总条目数量，选中数量

}
