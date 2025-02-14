class I18n {
    translations = {};
    lang = 'fr';

    constructor(translations) {
        this.translations = translations;
    }

    init() {
        this.lang = this.getLang()
        console.log(this.getLang())
    }

    getLang() {
        if (localStorage.getItem("lang") !== null) {
            return localStorage.getItem("lang")
        }

        if (navigator.languages !== undefined)
            return navigator.languages[0].split('-')[0];
        return navigator.language.split('-')[0];
    }

    setLang(language) {
        localStorage.setItem("lang", language)
        this.lang = language;
        this.translatePage();
    }

    translate(key)
    {
        if (this.translations[this.lang] === undefined) {
            return
        }
        return this.translations[this.lang][key]
    }


    translatePage() {
        var tags = document.querySelectorAll('[data-t]');

        for (var tag of tags) {
            var key = tag.getAttribute("data-t");
            var value = this.translate(key)

            if (value !== undefined) {
                tag.textContent = value
            }
        }
    }
}