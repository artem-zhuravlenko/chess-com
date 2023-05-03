import { resolveFigureClassType, convertToFigureCSSClass } from ".";
import { FIGURE_TYPE, FigureType, FigureClassType } from "../../types";

describe(resolveFigureClassType, () => {
  const testData: { input: FigureType; output: FigureClassType }[] = [
    { input: FIGURE_TYPE.pawn, output: "p" },
    { input: FIGURE_TYPE.knight, output: "n" },
    { input: FIGURE_TYPE.bishop, output: "b" },
    { input: FIGURE_TYPE.rook, output: "r" },
    { input: FIGURE_TYPE.queen, output: "q" },
    { input: FIGURE_TYPE.king, output: "k" },
  ];

  testData.forEach((test) => {
    it(`${test.input} --> ${test.output}`, () => {
      expect(resolveFigureClassType(test.input)).toBe(test.output);
    });
  });
});

describe(resolveFigureClassType, () => {
  it("", () => {
    expect(resolveFigureClassType("pawn")).toBe("p");
    expect(resolveFigureClassType("king")).toBe("k");
    expect(resolveFigureClassType("bishop")).toBe("b");
  });
});

describe("convertToFigureCSSClass", () => {
  it("should correctly convert color and figure type to a valid figure CSS class", () => {
    expect(convertToFigureCSSClass("white", "pawn")).toBe("wp");
    expect(convertToFigureCSSClass("black", "pawn")).toBe("bp");
    expect(convertToFigureCSSClass("white", "knight")).toBe("wn");
    expect(convertToFigureCSSClass("black", "knight")).toBe("bn");
  });
});
