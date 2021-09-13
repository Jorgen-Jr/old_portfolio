import translations from './../../translations/site.json';

const INITIAL_STATE =
{
    user_lang: 'enUS',
    translation: translations,
}

export default function user(state = INITIAL_STATE, action) {
    if(action.type === 'SWITCH_LANGUAGE'){
        return {
            ...state,
            user_lang: action.user_lang,
        };
    }
    return state;
}