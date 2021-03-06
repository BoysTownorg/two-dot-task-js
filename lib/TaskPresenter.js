export class TaskPresenter {
  constructor(view) {
    this.view = view;
  }

  notifyThatFirstChoiceHasStartedPlaying() {
    this.view.colorFirstDotRed();
  }

  notifyThatFirstChoiceHasStoppedPlaying() {
    this.view.colorFirstDotBlack();
  }

  notifyThatSecondChoiceHasStartedPlaying() {
    this.view.colorSecondDotRed();
  }

  notifyThatSecondChoiceHasStoppedPlaying() {
    this.view.colorSecondDotBlack();
  }

  notifyThatTaskIsComplete() {
    this.view.showContinueButton();
  }
}
