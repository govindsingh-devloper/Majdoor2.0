import React, { useState } from 'react';
import { LANGUAGES } from '../constants.js/constants';
import { useTranslation } from 'react-i18next';

const ToggleButton = () => {
  const { i18n, t } = useTranslation();
  const [langIndex, setLangIndex] = useState(0); // Start with the first language

  const toggleLanguage = () => {
    // Determine the next language index
    const nextLangIndex = langIndex === 0 ? 1 : 0;
    
    // Change the language first
    const lang_code = LANGUAGES[nextLangIndex].code;
    i18n.changeLanguage(lang_code);

    // Then update the state
    setLangIndex(nextLangIndex);
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" className="sr-only" checked={langIndex === 1} onChange={toggleLanguage} />
      <div className="flex h-12 items-center gap-10 rounded-full bg-orange-600 px-3 after:absolute after:left-1 after:h-6 after:w-16 after:rounded-full after:bg-white/40 after:transition-all after:content-[''] peer-checked:bg-stone-600 peer-checked:after:translate-x-full peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700 text-s text-white">
        {/* Show label for current language */}
        <span>{t(LANGUAGES[langIndex].label)}</span>
        {/* Show label for next language */}
        <span>{t(LANGUAGES[langIndex === 0 ? 1 : 0].label)}</span>
      </div>
    </label>
  );
};

export default ToggleButton;
