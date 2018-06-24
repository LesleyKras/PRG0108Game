interface IObservable {
    observers:Array<IObserver>;
    RegisterObserver(observer : IObserver ) : void;
    RemoveObserver(observer : IObserver ) : void;
}