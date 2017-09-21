export default class SocialPopup {
  constructor(options = {}) {
    const default_config = {
      root: document,
      link: "a.share",
      width: 500,
      height: 500
    };
    this.config = Object.assign(default_config, options);
    this.init();
  }

  init() {
    let share_links = this.config.root.querySelectorAll(this.config.link);

    for (let a = 0; a < share_links.length; a++) {
      share_links[a].addEventListener('click', (e)=>{
        e.preventDefault();
        return this.createPopup(share_links[a], e);
      });
    }
  }

  createPopup(link, e) {
      // popup position
      let px = Math.floor(((screen.availWidth || 1024) - this.config.width) / 2);
      let py = Math.floor(((screen.availHeight || 700) - this.config.height) / 2);

      // open popup
      let popup = window.open(link.getAttribute('href'), "social",
        "width=" + this.config.width + ",height=" + this.config.height +
        ",left=" + px + ",top=" + py +
        ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
      if (popup) {
        popup.focus();
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      }
      return !!popup;
  }
}
