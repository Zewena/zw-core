import customElement from "../../core/custom-element";
import styles from "./audio-track-progress-bar.css";
import template from "./audio-track-progress-bar.tmpl.html";

@customElement({
  selector: "audio-track-progress-bar",
  template: template,
  style: styles
})
export class AudioTrackProgressBar extends HTMLElement {
  public connectedCallback() {
    console.log("lol");
  }
}