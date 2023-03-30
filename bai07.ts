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
 * Ham tim so lon nhat
 * @param arr Mang
 */
function timMax(arr: number[]): void {
    let max: number = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        };
    };
    console.log(max);
};

/**
 * Ham chuc nang nhap so luong phan tu, goi ham nhap mang, ham tim so lon nhat
 */
function main(): void {
    let n: number = Number(question("Nhap so luong phan tu: "));
    let a: number[] = nhapMang(n);
    timMax(a);
};

main();

export {};