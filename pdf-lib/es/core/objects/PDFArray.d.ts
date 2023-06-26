import PDFBool from "./PDFBool";
import PDFDict from "./PDFDict";
import PDFHexString from "./PDFHexString";
import PDFName from "./PDFName";
import PDFNull from "./PDFNull";
import PDFNumber from "./PDFNumber";
import PDFObject from "./PDFObject";
import PDFRef from "./PDFRef";
import PDFStream from "./PDFStream";
import PDFString from "./PDFString";
import PDFContext from "../PDFContext";
import PDFRawStream from "./PDFRawStream";
declare class PDFArray extends PDFObject {
    static withContext: (context: PDFContext) => PDFArray;
    private readonly array;
    private readonly context;
    private constructor();
    size(): number;
    push(object: PDFObject): void;
    insert(index: number, object: PDFObject): void;
    indexOf(object: PDFObject): number | undefined;
    remove(index: number): void;
    set(idx: number, object: PDFObject): void;
    get(index: number): PDFObject;
    lookupMaybe(index: number, type: typeof PDFArray): PDFArray | undefined;
    lookupMaybe(index: number, type: typeof PDFBool): PDFBool | undefined;
    lookupMaybe(index: number, type: typeof PDFDict): PDFDict | undefined;
    lookupMaybe(index: number, type: typeof PDFHexString): PDFHexString | undefined;
    lookupMaybe(index: number, type: typeof PDFName): PDFName | undefined;
    lookupMaybe(index: number, type: typeof PDFNull): typeof PDFNull | undefined;
    lookupMaybe(index: number, type: typeof PDFNumber): PDFNumber | undefined;
    lookupMaybe(index: number, type: typeof PDFStream): PDFStream | undefined;
    lookupMaybe(index: number, type: typeof PDFRawStream): PDFRawStream | undefined;
    lookupMaybe(index: number, type: typeof PDFRef): PDFRef | undefined;
    lookupMaybe(index: number, type: typeof PDFString): PDFString | undefined;
    lookupMaybe(index: number, type1: typeof PDFString, type2: typeof PDFHexString): PDFString | PDFHexString | undefined;
    lookup(index: number): PDFObject | undefined;
    lookup(index: number, type: typeof PDFArray): PDFArray;
    lookup(index: number, type: typeof PDFBool): PDFBool;
    lookup(index: number, type: typeof PDFDict): PDFDict;
    lookup(index: number, type: typeof PDFHexString): PDFHexString;
    lookup(index: number, type: typeof PDFName): PDFName;
    lookup(index: number, type: typeof PDFNull): typeof PDFNull;
    lookup(index: number, type: typeof PDFNumber): PDFNumber;
    lookup(index: number, type: typeof PDFStream): PDFStream;
    lookup(index: number, type: typeof PDFRawStream): PDFRawStream;
    lookup(index: number, type: typeof PDFRef): PDFRef;
    lookup(index: number, type: typeof PDFString): PDFString;
    lookup(index: number, type1: typeof PDFString, type2: typeof PDFHexString): PDFString | PDFHexString;
    asRectangle(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    asArray(): PDFObject[];
    clone(context?: PDFContext): PDFArray;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
    scalePDFNumbers(x: number, y: number): void;
}
export default PDFArray;
//# sourceMappingURL=PDFArray.d.ts.map