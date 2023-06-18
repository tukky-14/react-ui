// https://flowbite.com/docs/components/kbd/

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const fns = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
const kanas = ['ア行', 'カ行', 'サ行', 'タ行', 'ナ行', 'ハ行', 'マ行', 'ヤ行', 'ラ行', 'ワ行'];
const keys = ['Shift', 'Ctrl', 'Tab', 'Caps Lock', 'Esc', 'Spacebar', 'Enter'];
// prettier-ignore
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X', 'Y', 'Z'];
// prettier-ignore
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', "'", '"', ',', '.', '/', '<', '>', '?', '|', '\\'];

const KBD = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col gap-10 p-4">
            <div>
                {numbers.map((number) => (
                    <button className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 hover:bg-gray-300 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 select-none">
                        {number}
                    </button>
                ))}
            </div>
            <div>
                {fns.map((fn) => (
                    <button className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 hover:bg-gray-300 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 select-none">
                        {fn}
                    </button>
                ))}
            </div>
            <div>
                {kanas.map((kana) => (
                    <button className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 hover:bg-gray-300 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 select-none">
                        {kana}
                    </button>
                ))}
            </div>
            <div>
                {keys.map((key) => (
                    <button className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 hover:bg-gray-300 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 select-none">
                        {key}
                    </button>
                ))}
            </div>
            <div>
                {alphabets.map((alphabet) => (
                    <button className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 hover:bg-gray-300 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 select-none">
                        {alphabet}
                    </button>
                ))}
            </div>
            <div>
                {symbols.map((symbol) => (
                    <button className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 hover:bg-gray-300 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 select-none">
                        {symbol}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default KBD;
