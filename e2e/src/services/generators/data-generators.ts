export class Generators {

  /**
   * Generate a Due Date
   * 
   * @param length the length of the date
   */
  public randomDueDate(length: number = 10) {
    const newDate = new Date()
    newDate.setDate(newDate.getDate() + length);
    return (
      newDate.toLocaleString(
        'en-NZ', { day: '2-digit', month: 'short'}) + ' ' + newDate.getFullYear());
  }

}
