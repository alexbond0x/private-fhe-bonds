import { getFhevmInstance } from 'fhevmjs';

export class FHEUtils {
  private static instance: any = null;

  static async getInstance() {
    if (!this.instance) {
      this.instance = await getFhevmInstance();
    }
    return this.instance;
  }

  static async encryptAmount(
    value: number,
    contractAddress: string,
    userAddress: string
  ): Promise<{ encryptedData: string; inputProof: string }> {
    const instance = await this.getInstance();
    
    // Generate encryption for the amount
    const encryptedData = instance.encrypt32(value);
    
    // Generate input proof for the encrypted data
    const inputProof = await instance.generateInputProof({
      input: encryptedData,
      publicKey: instance.getPublicKey(contractAddress),
      signature: await instance.signMessage(contractAddress, userAddress)
    });

    return {
      encryptedData: encryptedData,
      inputProof: inputProof
    };
  }

  static async decryptAmount(
    encryptedData: string,
    contractAddress: string
  ): Promise<number> {
    const instance = await this.getInstance();
    return instance.decrypt32(encryptedData, contractAddress);
  }

  static async generateProof(
    data: any,
    contractAddress: string,
    userAddress: string
  ): Promise<string> {
    const instance = await this.getInstance();
    return await instance.generateInputProof({
      input: data,
      publicKey: instance.getPublicKey(contractAddress),
      signature: await instance.signMessage(contractAddress, userAddress)
    });
  }
}
