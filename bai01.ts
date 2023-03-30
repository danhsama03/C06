import { question } from "readline-sync";
/**
 * Ham nhap cac phan tu theo so luong
 * @param len So luong phan tu 
 * @returns Tra ve mang
 */
function nhapMang(len: number): number[] {
	let arr: number[] = [];
	for (let i = 0; i < len; i++) {
        arr[i] = Number(question(`Nhap phan tu vi tri ${i}: `));
    };
	return arr;
};

/**
 * Ham liet ke so le
 * @param arr Mang
 */
function lietKeSoChan(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        };
    };
};

/**
 * Ham chuc nang nhap so luong phan tu, goi ham nhap mang, ham liet ke so le
 */
function main(): void {
    let n: number = Number(question("Nhap so luong phan tu: "));
    let a: number[] = nhapMang(n);
    lietKeSoChan(a);
};

main();

export {};