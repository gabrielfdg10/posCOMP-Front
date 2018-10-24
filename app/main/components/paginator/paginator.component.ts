import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"]
})
export class PaginatorComponent implements OnInit {
  constructor() {}

  @Input()
  pageSize: number = 0;
  @Input()
  dataSize: number = 0;

  public page: number = 0;
  public nPages: number = 0;

  public dataRange: {
    start: number;
    end: number;
  };

  public arr = [
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a"
  ];

  public pagedArr = [];

  ngOnInit() {
    this.calculate();

    console.log(this.arr.length);
    this.nPages =
      this.dataSize % this.pageSize === 0
        ? this.dataSize / this.pageSize
        : Math.floor(this.dataSize / this.pageSize) + 1;
    this.dataRange = { start: 0, end: this.pageSize - 1 };
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 1;
      this.calculate();
    }
  }

  nextPage() {
    if (this.page < this.nPages - 1) {
      this.page += 1;
      this.calculate();
    }
  }

  calculate() {
    this.dataRange = {
      start: this.pageSize * this.page,
      end:
        this.pageSize * this.page + this.pageSize - 1 > this.dataSize - 1
          ? this.dataSize - 1
          : this.pageSize * this.page + this.pageSize - 1
    };
    console.log(this.dataRange);
    this.pagedArr = this.arr.slice(this.dataRange.start, this.dataRange.end + 1);
  }
}
