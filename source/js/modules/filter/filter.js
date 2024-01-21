export class Filter {
  constructor() {
    this._filter = document.querySelector('[data-filter]');
    this._toggle = document.querySelector('[data-toggle-filter-menu]');
    this._isMenuOpen = false;

    this._onToggleClick = this._onToggleClick.bind(this);
    this._onDocumentKeydown = this._onDocumentKeydown.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);
  }

  init() {
    if (!this._toggle) {
      return;
    }

    this._toggle.addEventListener('click', this._onToggleClick);
  }

  _openMenu() {
    this._isMenuOpen = true;
    this._filter.classList.add('is-open');
    document.addEventListener('keydown', this._onDocumentKeydown);
    document.addEventListener('click', this._onDocumentClick);
  }

  _closeMenu() {
    this._isMenuOpen = false;
    this._filter.classList.remove('is-open');
    document.removeEventListener('keydown', this._onDocumentKeydown);
    document.removeEventListener('click', this._onDocumentClick);
  }

  _onToggleClick() {
    if (this._isMenuOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
    }
  }

  _onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      this._closeMenu();
    }
  }

  _onDocumentClick(evt) {
    console.log(evt.target);
    if (evt.target.closest('[data-filter-close]')) {
      this._closeMenu();
    }
  }
}
