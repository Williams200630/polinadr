export function objective(s){
 const g=(text,scene,view,id)=>({text,scene,view,id});
 if(!s.done.names)return g(s.scene==='study'?'Начни с коробки на столе. На ней две именные таблички.':'Часы потеряли стрелки. Начни поиски в кабинете.','study',0,'names');
 if(!s.done.diary){if(!s.flags.diaryRead)return g('Осмотри пустой дневник: рядом лежит записка.','study',0,'diary');if(s.flags.diaryClosed)return g('В корешке закрытого дневника появился язычок.','study',0,'diary');if(s.flags.heated)return g('На странице проступили строки. Прочитай, что просит дневник.','study',0,'diary');if(s.flags.lit)return g('Свеча горит. Что написано в записке к дневнику?','study',0,'diary');return g('В коробке были спички. Осмотри свечу рядом с дневником.','study',0,'candle')}
 if(!s.flags.mirrorOpen)return g('Серебряный ключ подходит к двери зеркальной комнаты.','hall',0,'mirror-door');
 if(!s.done.rose){if(!s.notes.some(n=>n.title==='Словарь по другую сторону'))return g('Осмотри зеркало, затем полку по другую сторону.','mirror',0,s.flags.reflected?'shelf':'mirror');if(s.flags.reflected)return g('Ты узнала слово. Вернись через зеркало в настоящую комнату.','mirror',0,'mirror');return g(s.flags.cut?'За обоями скрывался буквенный замок.':'На другой стене отслоился край обоев.','mirror',2,'wallpaper')}
 if(!s.flags.buttonTaken)return g(s.flags.reflected?'На пальто одна пуговица похожа на ключ.':'В тайнике нарисованы ножницы и пуговица. Загляни в отражение.','mirror',s.flags.reflected?1:0,s.flags.reflected?'coat':'mirror');
 if(!s.flags.archiveOpen)return g('Пуговичный ключ подходит к двери архива.','hall',2,'archive-door');
 if(!s.done.herb)return g(s.flags.protected?'На крышке шкатулки проступил растительный узор.':s.inv.includes('herb')?'В крышке шкатулки есть место для веточки.':'Гербарий поможет разобраться со странной шкатулкой.','archive',1,s.inv.includes('herb')||s.flags.protected?'box':'herbarium');
 if(!s.done.pairs)return g('Сравни медальоны в оправе. У тебя уже есть зеркальце.','archive',0,'frames');
 if(!s.done.prison)return g('Проигрыватель повторяется, календарь не меняется. Осмотри прибор.','archive',0,'projector');
 if(!s.done.invite)return g('Гость у порога макета не может войти.','archive',2,'house');
 if(!s.done.shadows&&!s.flags.shadowGuideRead)return g('На раме письма есть гравировка. Сначала прочитай её.','archive',1,'letter');
 if(!s.done.shadows)return g('Три фрагмента собраны. Теперь осмотри письмо в раме.','archive',1,'letter');
 if(!s.flags.forestOpen)return g('Печать дома подходит к последней двери в архиве.','archive',2,'forest-door');
 if(!s.done.forest&&!s.flags.forestNoteRead)return g('Прочитай записку на столбе остановки.','forest',0,'forestnote');
 if(!s.done.forest&&s.flags.umbrella&&!s.flags.rain)return g(s.flags.rainSeen?'Повтори увиденный рисунок капель.':'Посмотри демонстрацию рисунка дождя под зонтом.','forest',0,'umbrella');
 if(!s.done.forest)return s.flags.rain?g(s.flags.planted?'Ростку нужна вода из ведра.':'Теперь можно посадить жёлудь в рыхлую землю.','forest',1,'soil'):g('На остановке лежит зонт. Под ним записка о дожде.','forest',0,'umbrella');
 return g(s.flags.hands?'Стрелки на месте. В журнале сохранилось время приглашения.':'Верни часам обе найденные стрелки.','hall',0,'clock');
}
export const icons={left:'<path d="M27 6L10 24l17 18"/>',right:'<path d="M14 6l17 18-17 18"/>',down:'<path d="M6 16l18 17 18-17"/>',sound:'<path d="M8 18h9l12-9v30l-12-9H8zM35 15q11 9 0 18"/>',muted:'<path d="M8 18h9l12-9v30l-12-9H8zM35 18l9 12m0-12-9 12"/>',journal:'<path d="M9 7h26v35H9zM15 7v35M21 16h8m-8 7h8m-8 7h8"/>',hint:'<path d="M18 21h12v17H18zM24 21v-5q-9-7 0-15q9 9 0 15M11 39h26"/>',eye:'<path d="M3 24q21-26 42 0q-21 26-42 0z"/><circle cx="24" cy="24" r="7"/>',menu:'<path d="M8 13h32M8 24h32M8 35h32"/>',locate:'<circle cx="24" cy="24" r="13"/><path d="M24 3v11m0 20v11M3 24h11m20 0h11"/>',zoom:'<circle cx="20" cy="20" r="12"/><path d="M29 29l12 12M14 20h12m-6-6v12"/>'};
export const icon=id=>`<svg viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${icons[id]||icons.eye}</svg>`;
