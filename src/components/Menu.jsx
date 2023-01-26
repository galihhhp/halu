const Menu = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  if (isOpen) {
    return (
      <div className="relative inline-block text-left">
        <div class="fixed inset-0 z-40" aria-hidden="true" onClick={onClose} />
        <div
          className="absolute right-0 z-50 rounded-[8px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1">
          <div
            className="flex flex-col text-black justify-between w-72 h-96 p-8"
            role="none">
            {children}
          </div>
        </div>
      </div>
    );
  }
};

export default Menu;
