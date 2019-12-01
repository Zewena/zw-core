import customElement from "../../core/custom-element";
import template from "./audio-track-uploader.tmpl.html";
import styles from "./audio-track-uploader.css";

@customElement({
  selector: "audio-track-uploader",
  template: template,
  style: styles
})
export class AudioTrackUploader extends HTMLElement {
  public connectedCallback() {
    console.log(this);
  }
}