class I18n {
    locale = 'en-US'
    translations = {};
    constructor(translations) {
        this.translations = translations;
    }

    init() {
        this.locale = this.getLang()
        console.log(this.locale)
    }

    getLang() {
        if (navigator.languages !== undefined)
            return navigator.languages[0].split('-')[0];
        return navigator.language.split('-')[0];
    }

    translate(key)
    {
        return this.translations[this.locale][key]
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