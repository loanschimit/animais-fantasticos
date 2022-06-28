export default function initTooltip() {
  const tooltip = document.querySelectorAll("[data-tooltip]");

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const texto = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = texto;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  const onMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
    },
  };
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };
  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = tooltipBox;
    this.addEventListener("mouseleave", onMouseLeave);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
  }

  tooltip.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
